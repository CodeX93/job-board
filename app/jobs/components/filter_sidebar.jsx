"use client"

import { useState } from "react"
import { Paper, Box, Button, Drawer, useMediaQuery } from "@mui/material"
import { FilterList } from "@mui/icons-material"
import LocationFilter from "./locationfilter"
import CategoryFilter from "./category-filter"
import ExperienceFilter from "./experience_filter"
import { useTheme } from "@mui/material/styles"

export default function FilterSidebar({ onLocationChange, onCategoryChange, onExperienceChange, locations = [], categories = [], experiences = [] }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)

  const filterContent = (
    <Paper elevation={0} sx={{
      width: 300,
      bgcolor: '#fff',
      p: 2,
      borderRadius: 2,
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    }}>
      <Button
        variant="contained"
        startIcon={<FilterList />}
        fullWidth
        sx={{
          bgcolor: '#1976d2',
          color: '#fff',
          fontWeight: 600,
          fontSize: 16,
          borderRadius: 1.5,
          py: 1,
          mb: 2,
          boxShadow: 'none',
          minHeight: 36,
          '&:hover': { bgcolor: '#1565c0' },
        }}
        onClick={() => isMobile && setOpen(false)}
      >
        Filter
      </Button>
      <Paper elevation={1} sx={{ mb: 2, p: 1.5, borderRadius: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', border: '1px solid #e0e0e0', bgcolor: '#fff' }}>
        <LocationFilter onLocationChange={onLocationChange} locations={locations} />
      </Paper>
      <Paper elevation={1} sx={{ mb: 2, p: 1.5, borderRadius: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', border: '1px solid #e0e0e0', bgcolor: '#fff' }}>
        <CategoryFilter onCategoryChange={onCategoryChange} categories={categories} />
      </Paper>
      <Paper elevation={1} sx={{ mb: 2, p: 1.5, borderRadius: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', border: '1px solid #e0e0e0', bgcolor: '#fff' }}>
        <ExperienceFilter onExperienceChange={onExperienceChange} experiences={experiences} />
      </Paper>
    </Paper>
  )

  if (isMobile) {
    return (
      <Box>
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
          onClick={() => setOpen(true)}
        >
          Show Filters
        </Button>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          {filterContent}
        </Drawer>
      </Box>
    )
  }

  return filterContent
}
