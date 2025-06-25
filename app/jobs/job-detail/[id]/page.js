"use client"

import { useState, useEffect } from "react"
import { Container, Grid, Box, Typography, Button } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import JobDetailHeader from "../components/job-detail-header"
import CompanySidebar from "../components/company-sidebar"
import JobInfoCards from "../components/job-info-cards"
import RequiredSkills from "../components/required-skills"
import SimilarJobs from "../components/similar-jobs"
import { use as usePromise } from "react"
import Navbar from "@/app/component/Navbar"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default function JobDetailPage({ params }) {
  const { id } = usePromise(params)
  const [jobData, setJobData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch("/job_listing.json")
        const data = await response.json()

        // Find the specific job by ID
        const jobId = Number.parseInt(id)
        const job = data.jobListings.find((j) => j.id === jobId)

        if (job) {
          // Create company data from job info
          const company = {
            name: job.company,
            logo: job.logo,
            location: job.location,
            about:
              job.company === "Emirates"
                ? "Emirates Airline, based in Dubai, is a global leader in aviation, known for its exceptional service and state-of-the-art fleet. Since 1985, we've connected passengers to over 150 destinations and continue to innovate for a better flying experience."
                : "Oryx Search is a cutting-edge AI company focused on revolutionizing search and discovery through advanced GenAI and LLM technologies.",
            benefits: job.benefits,
          }

          // Get similar jobs (other jobs from same company or category)
          const similarJobs = data.jobListings
            .filter((j) => j.id !== jobId && (j.company === job.company || j.category === job.category))
            .slice(0, 4)

          setJobData({ job, company, similarJobs })
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching job data:", error)
        setLoading(false)
      }
    }

    fetchJobData()
  }, [id])

  const handleBack = () => {
    window.history.back()
  }

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Typography>Loading...</Typography>
        </Container>
      </ThemeProvider>
    )
  }

  if (!jobData) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Typography>Job not found</Typography>
        </Container>
      </ThemeProvider>
    )
  }

  const { job, company, similarJobs } = jobData

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box sx={{ minHeight: "100vh", bgcolor: "grey.50" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 } }}>
          <JobDetailHeader job={job} onBack={handleBack} />

          <Grid container spacing={4}>
            {/* Main Content - Left Side */}
            <Grid item xs={12} lg={8} sx={{ order: { xs: 2, lg: 1 } }}>
              <JobInfoCards job={job} />
              <RequiredSkills skills={job.requiredSkills} />

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Position Details
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "primary.main" }}>
                  About the Job
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  {job.aboutJob}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  {job.roleDescription}
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                  In this role you will:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                  {job.responsibilities.map((responsibility, index) => (
                    <Typography component="li" key={index} variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
                      {responsibility}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Requirements
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  To be considered for this role, you must meet the following requirements:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                  {job.jobRequirements.map((requirement, index) => (
                    <Typography component="li" key={index} variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
                      {requirement}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Salary & Benefits
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  {job.salaryBenefits}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button variant="contained" size="large" sx={{ px: 4 }}>
                    Apply Now
                  </Button>
                  <Button variant="outlined" size="large" sx={{ px: 4 }}>
                    Save for Later
                  </Button>
                </Box>
              </Box>

              <SimilarJobs jobs={similarJobs} />
            </Grid>

            {/* Company Sidebar - Right Side */}
            <Grid item xs={12} lg={4} sx={{ order: { xs: 1, lg: 2 } }}>
              <CompanySidebar company={company} job={job} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
