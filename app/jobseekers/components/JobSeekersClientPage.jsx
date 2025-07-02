"use client"

import { useState, useEffect } from "react"
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
  const [seekers, setSeekers] = useState(initialData?.jobSeekers || [])
  const [categoryCounts, setCategoryCounts] = useState([])
  const [experienceCounts, setExperienceCounts] = useState([])

  useEffect(() => {
    // Calculate dynamic counts for categories
    const catMap = {};
    const expMap = {};
    seekers.forEach(seeker => {
      catMap[seeker.category] = (catMap[seeker.category] || 0) + 1;
      expMap[seeker.experience] = (expMap[seeker.experience] || 0) + 1;
    });
    setCategoryCounts(Object.entries(catMap).map(([name, count]) => ({ name, count })));
    setExperienceCounts(Object.entries(expMap).map(([name, count]) => ({ name, count })));
  }, [seekers]);

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
        <Container maxWidth={false} sx={{ py: 4 }}>
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

          <Grid container spacing={4} alignItems="flex-start">
            {/* Filter Sidebar */}
            <Grid item xs={12} md={3}>
              <Box sx={{ position: { md: "sticky" }, top: { md: 24 } }}>
                <SeekerFilterSidebar
                  onCategoryChange={handleCategoryChange}
                  onExperienceChange={handleExperienceChange}
                  categories={categoryCounts}
                  experience={experienceCounts}
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