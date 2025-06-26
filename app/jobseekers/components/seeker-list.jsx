"use client"

import { useState, useEffect } from "react"
import { Box, Typography, Button, CircularProgress } from "@mui/material"
import SeekerCard from "./seeker-card"
import { fetchJobSeekersDataClient } from "../../lib/data"

export default function SeekerList({ initialData, selectedCategory, selectedExperience }) {
  const [seekers, setSeekers] = useState(initialData?.jobSeekers || [])
  const [filteredSeekers, setFilteredSeekers] = useState([])
  const [displayedSeekers, setDisplayedSeekers] = useState([])
  const [loading, setLoading] = useState(!initialData)
  const [loadingMore, setLoadingMore] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const seekersPerPage = 3 // Changed from 9 to 3 to show the Load More button

  // Only fetch client-side if no initialData (fallback)
  useEffect(() => {
    if (!initialData) {
      const fetchData = async () => {
        const data = await fetchJobSeekersDataClient()
        setSeekers(data.jobSeekers)
        setLoading(false)
      }
      fetchData()
    }
  }, [initialData])

  useEffect(() => {
    let filtered = seekers

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((seeker) => seeker.category === selectedCategory)
    }

    // Filter by experience
    if (selectedExperience) {
      filtered = filtered.filter((seeker) => seeker.experience === selectedExperience)
    }

    setFilteredSeekers(filtered)
    setCurrentPage(1)
  }, [selectedCategory, selectedExperience, seekers])

  useEffect(() => {
    const endIndex = currentPage * seekersPerPage
    setDisplayedSeekers(filteredSeekers.slice(0, endIndex))
  }, [filteredSeekers, currentPage])

  const handleLoadMore = async () => {
    setLoadingMore(true)
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setCurrentPage((prev) => prev + 1)
    setLoadingMore(false)
  }

  const hasMoreSeekers = displayedSeekers.length < filteredSeekers.length

  const handleSeekerClick = (seeker) => {
    console.log("Seeker clicked:", seeker)
    // Handle seeker profile view
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ flex: 1 }}>
      {displayedSeekers.map((seeker) => (
        <SeekerCard key={seeker.id} seeker={seeker} onClick={handleSeekerClick} />
      ))}

      {displayedSeekers.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No job seekers found matching your criteria
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Try adjusting your filters to see more results.
          </Typography>
        </Box>
      )}

      {hasMoreSeekers && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            disabled={loadingMore}
            sx={{
              bgcolor: "grey.800",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 1,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "grey.900",
              },
              "&:disabled": {
                bgcolor: "grey.600",
              },
            }}
            startIcon={loadingMore ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loadingMore ? "Loading..." : "Load More Jobs"}
          </Button>
        </Box>
      )}
    </Box>
  )
}
