"use client"

import { useState, useEffect } from "react"
import { Box, Typography, Alert, Button } from "@mui/material"
import JobCard from "./job-card"
import SearchBar from "./searchbar"
import SortDropdown from "./sort-dropdown"
import Pagination from "./pagination"
import JobDetailsModal from "./job-detailModal"
import JobApplicationModal from "./job_application-modal"
import Link from "next/link"
import { fetchJobsDataClient } from "../../lib/data"

export default function JobList({ initialData, selectedLocations, selectedCategories, selectedExperiences }) {
  const [jobs, setJobs] = useState(initialData?.jobListings || [])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [displayedJobs, setDisplayedJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedJob, setSelectedJob] = useState(null)
  const [showJobDetails, setShowJobDetails] = useState(false)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const jobsPerPage = 5
  const jobsToShow = 8
  const [showCount, setShowCount] = useState(jobsToShow)

  // Only fetch client-side if no initialData (fallback)
  useEffect(() => {
    if (!initialData) {
      const fetchData = async () => {
        const data = await fetchJobsDataClient()
        setJobs(Array.isArray(data.jobListings) ? data.jobListings : [])
      }
      fetchData()
    }
  }, [initialData])

  useEffect(() => {
    let filtered = Array.isArray(jobs) ? jobs : []

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by location
    if (selectedLocations.length > 0) {
      filtered = filtered.filter((job) => selectedLocations.some((location) => job.location.includes(location)))
    }

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((job) => selectedCategories.includes(job.category))
    }

    // Filter by experience (simplified logic)
    if (selectedExperiences.length > 0) {
      // This is a simplified filter - in real app, you'd have experience levels in job data
      filtered = filtered.filter(() => true) // Keep all for now
    }

    // Sort jobs
    const sortedJobs = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.datePosted) - new Date(a.datePosted)
        case "oldest":
          return new Date(a.datePosted) - new Date(b.datePosted)
        case "salary-high":
          return b.salaryMax - a.salaryMax
        case "salary-low":
          return a.salaryMin - b.salaryMin
        case "relevance":
        default:
          return 0
      }
    })

    setFilteredJobs(sortedJobs)
    setCurrentPage(1)
    setShowCount(jobsToShow)
  }, [searchTerm, selectedLocations, selectedCategories, selectedExperiences, jobs, sortBy])

  useEffect(() => {
    const startIndex = (currentPage - 1) * jobsPerPage
    const endIndex = startIndex + jobsPerPage
    setDisplayedJobs(filteredJobs.slice(startIndex, endIndex))
  }, [filteredJobs, currentPage])

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

  const handleJobClick = (job) => {
    setSelectedJob(job)
    setShowJobDetails(true)
  }

  const handleApplyClick = (job) => {
    setSelectedJob(job)
    setShowJobDetails(false)
    setShowApplicationForm(true)
  }

  const handleApplicationSubmit = (formData, job) => {
    console.log("Application submitted:", { formData, job })
    alert(`Application submitted successfully for ${job.title} at ${job.company}!`)
    setShowApplicationForm(false)
    setSelectedJob(null)
  }

  const loadMoreJobs = () => {
    setShowCount((prev) => prev + jobsToShow)
  }

  return (
    <Box sx={{ flex: 1 }}>
      <SearchBar onSearch={setSearchTerm} />

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="body1" color="text.secondary">
          Showing {displayedJobs.length} of {filteredJobs.length} jobs
        </Typography>
        <SortDropdown onSort={setSortBy} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {displayedJobs.map((job) => (
          <Link key={job.id} href={`/jobs/job-detail/${job.id}`} style={{ textDecoration: 'none' }}>
            <JobCard job={job} onClick={handleJobClick} />
          </Link>
        ))}
      </Box>

      {displayedJobs.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Alert severity="info" sx={{ maxWidth: 400, mx: "auto" }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              No jobs found matching your criteria
            </Typography>
            <Typography variant="body2">Try adjusting your filters or search terms.</Typography>
          </Alert>
        </Box>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      <JobDetailsModal
        job={selectedJob}
        isOpen={showJobDetails}
        onClose={() => {
          setShowJobDetails(false)
          setSelectedJob(null)
        }}
        onApply={handleApplyClick}
      />

      <JobApplicationModal
        job={selectedJob}
        isOpen={showApplicationForm}
        onClose={() => {
          setShowApplicationForm(false)
          setSelectedJob(null)
        }}
        onSubmit={handleApplicationSubmit}
      />

      {displayedJobs.length < filteredJobs.length && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            onClick={loadMoreJobs}
            sx={{ bgcolor: "#111", color: "#fff", px: 5, py: 1.5, borderRadius: 2, fontWeight: 600, fontSize: 18, '&:hover': { bgcolor: '#222' } }}
          >
            Load More Jobs
          </Button>
        </Box>
      )}
    </Box>
  )
}
