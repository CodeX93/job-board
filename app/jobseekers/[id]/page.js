"use client"

import React, { useState, useEffect } from "react"
import { Container, Grid, Box, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useRouter } from "next/navigation"
import SeekerDetailHeader from "../components/seeker-detail-header"
import SeekerSkillsSection from "../components/seeker-skills-section"
import SeekerAboutSection from "../components/seeker-about-section"
import SeekerCTASidebar from "../components/seeker-cta-sidebar"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default function SeekerDetailPage({ params }) {
  const [seeker, setSeeker] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  
  // Unwrap params Promise for Next.js 15
  const unwrappedParams = React.use(params)
  const seekerId = Number.parseInt(unwrappedParams.id)

  useEffect(() => {
    const fetchSeeker = async () => {
      try {
        const response = await fetch("/job-seekers.json")
        const data = await response.json()

        const foundSeeker = data.jobSeekers.find((s) => s.id === seekerId)

        if (foundSeeker) {
          setSeeker(foundSeeker)
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching seeker:", error)
        setLoading(false)
      }
    }

    fetchSeeker()
  }, [seekerId])

  const handleBack = () => {
    router.back()
  }

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography>Loading...</Typography>
        </Container>
      </ThemeProvider>
    )
  }

  if (!seeker) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography>Job seeker not found</Typography>
        </Container>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 } }}>
          <SeekerDetailHeader seeker={seeker} onBack={handleBack} />

          <Grid container spacing={4} sx={{ alignItems: "flex-start" }}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              <SeekerSkillsSection skills={seeker.skillCategories} />
              <SeekerAboutSection aboutMe={seeker.aboutMe} />
            </Grid>

            {/* CTA Sidebar */}
            <Grid item xs={12} md={4}>
              <Box sx={{ position: { md: "sticky" }, top: { md: 24 } }}>
                <SeekerCTASidebar />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
