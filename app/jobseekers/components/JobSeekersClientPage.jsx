"use client"

import { useState } from "react"
import { Container, Grid, Box, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import SeekerFilterSidebar from "./seeker-filter-sidebar"
import SeekerList from "./seeker-list"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default function JobSeekersClientPage({ initialData }) {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedExperience, setSelectedExperience] = useState("")

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleExperienceChange = (experience) => {
    setSelectedExperience(experience)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 } }}>
          {/* Page Header */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 4,
              color: "text.primary",
              fontSize: { xs: "1.75rem", sm: "2.125rem" },
            }}
          >
            Looking for the Right Talent? We've Got You!
          </Typography>

          <Grid container spacing={3}>
            {/* Filter Sidebar */}
            <Grid item xs={12} md={3}>
              <Box sx={{ position: { md: "sticky" }, top: { md: 24 } }}>
                <SeekerFilterSidebar
                  onCategoryChange={handleCategoryChange}
                  onExperienceChange={handleExperienceChange}
                />
              </Box>
            </Grid>

            {/* Main Content */}
            <Grid item xs={12} md={9}>
              <SeekerList 
                initialData={initialData} 
                selectedCategory={selectedCategory} 
                selectedExperience={selectedExperience} 
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
} 