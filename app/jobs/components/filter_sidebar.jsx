"use client"

import { Paper, Box, Button } from "@mui/material"
import { FilterList } from "@mui/icons-material"
import LocationFilter from "./locationfilter"
import CategoryFilter from "./category-filter"
import ExperienceFilter from "./experience_filter"

export default function FilterSidebar({ onLocationChange, onCategoryChange, onExperienceChange }) {
  return (
    <Paper elevation={1} sx={{ width: 280, bgcolor: '#fff', p: 2.5, borderRadius: 3, boxShadow: 2 }}>
      <Button
        variant="contained"
        startIcon={<FilterList />}
        fullWidth
        sx={{
          bgcolor: '#1976d2',
          color: '#fff',
          fontWeight: 600,
          fontSize: 18,
          borderRadius: 2,
          py: 1.2,
          mb: 3,
          '&:hover': { bgcolor: '#1565c0' },
        }}
      >
        Filter
      </Button>
      <LocationFilter onLocationChange={onLocationChange} />
      <CategoryFilter onCategoryChange={onCategoryChange} />
      <ExperienceFilter onExperienceChange={onExperienceChange} />
    </Paper>
  )
}
