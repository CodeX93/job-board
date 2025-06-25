"use client"

import { useState } from "react"
import { Container, Typography, Box, Grid } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import FilterSidebar from "./components/filter_sidebar"
import JobList from "./components/job-list"


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

export default function JobBoard() {
  const [selectedLocations, setSelectedLocations] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedExperiences, setSelectedExperiences] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box sx={{ minHeight: "100vh", bgcolor: "#f5f6fa" }}>
        <Container maxWidth={false} sx={{ py: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 4, color: "#222", textAlign: 'left' }}>
            Jobs Tailored for You....
          </Typography>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={3} lg={3}>
              <FilterSidebar
                onLocationChange={setSelectedLocations}
                onCategoryChange={setSelectedCategories}
                onExperienceChange={setSelectedExperiences}
              />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <JobList
                selectedLocations={selectedLocations}
                selectedCategories={selectedCategories}
                selectedExperiences={selectedExperiences}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
