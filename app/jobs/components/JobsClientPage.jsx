"use client"

import { useState, useEffect } from "react"
import { useCallback } from "react"
import { Container, Typography, Box, Grid } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import FilterSidebar from "./filter_sidebar"
import JobList from "./job-list"

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

export default function JobsClientPage({ initialData }) {
  const [selectedLocations, setSelectedLocations] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedExperiences, setSelectedExperiences] = useState([])
  const [jobs, setJobs] = useState(initialData?.jobListings || [])
  const [filterOptions, setFilterOptions] = useState({ locations: [], categories: [], experience: [] })
  const [locationCounts, setLocationCounts] = useState([])
  const [categoryCounts, setCategoryCounts] = useState([])
  const [experienceCounts, setExperienceCounts] = useState([])

  // Load filter options from filter.json on mount
  useEffect(() => {
    fetch('/filter.json')
      .then(res => res.json())
      .then(data => setFilterOptions(data))
      .catch(() => setFilterOptions({ locations: [], categories: [], experience: [] }))
  }, [])

  // Calculate dynamic counts for each filter option from jobs data
  useEffect(() => {
    // Locations
    const locs = filterOptions.locations.map(opt => {
      const count = jobs.filter(job => job.location === opt.name).length
      return { ...opt, count }
    })
    setLocationCounts(locs)

    // Categories
    const cats = filterOptions.categories.map(opt => {
      const count = jobs.filter(job => job.category === opt.name).length
      return { ...opt, count }
    })
    setCategoryCounts(cats)

    // Experience
    const exps = filterOptions.experience.map(opt => {
      const count = jobs.filter(job => (job.jobRequirementsSimple && job.jobRequirementsSimple.experience === opt.name)).length
      return { ...opt, count }
    })
    setExperienceCounts(exps)
  }, [jobs, filterOptions])

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
                locations={locationCounts}
                categories={categoryCounts}
                experiences={experienceCounts}
              />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <JobList
                initialData={initialData}
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