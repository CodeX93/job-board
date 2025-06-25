"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Paper,
  Typography,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material"
import { FilterList, ExpandMore } from "@mui/icons-material"

export default function SeekerFilterSidebar({ onCategoryChange, onExperienceChange }) {
  const [filters, setFilters] = useState({ categories: [], experience: [] })
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedExperience, setSelectedExperience] = useState("")

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch("/data/seeker-filters.json")
        const data = await response.json()
        setFilters(data)
      } catch (error) {
        console.error("Error fetching filters:", error)
      }
    }
    fetchFilters()
  }, [])

  const handleCategoryChange = (event) => {
    const value = event.target.value
    setSelectedCategory(value)
    onCategoryChange(value)
  }

  const handleExperienceChange = (event) => {
    const value = event.target.value
    setSelectedExperience(value)
    onExperienceChange(value)
  }

  const formatCount = (count) => {
    return count.toString().padStart(2, "0")
  }

  return (
    <Paper
      sx={{
        width: { xs: "100%", md: 280 },
        bgcolor: "grey.100",
        p: 2,
        borderRadius: 2,
        boxShadow: "none",
        border: "1px solid",
        borderColor: "grey.200",
      }}
    >
      <Button
        variant="contained"
        startIcon={<FilterList />}
        endIcon={<ExpandMore />}
        fullWidth
        sx={{
          mb: 3,
          py: 1.5,
          bgcolor: "primary.main",
          "&:hover": { bgcolor: "primary.dark" },
          justifyContent: "space-between",
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: 500,
        }}
      >
        Filter
      </Button>

      {/* Category Filter */}
      <Accordion
        defaultExpanded
        sx={{
          boxShadow: "none",
          "&:before": { display: "none" },
          bgcolor: "transparent",
          mb: 2,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            px: 0,
            minHeight: "auto",
            "& .MuiAccordionSummary-content": { my: 1 },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
            Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup value={selectedCategory} onChange={handleCategoryChange}>
              {filters.categories.map((category) => (
                <FormControlLabel
                  key={category.name}
                  value={category.name}
                  control={<Radio size="small" />}
                  label={
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                        {category.name}
                      </Typography>
                      <Chip
                        label={formatCount(category.count)}
                        size="small"
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          fontSize: "0.75rem",
                          height: 20,
                          minWidth: 28,
                        }}
                      />
                    </Box>
                  }
                  sx={{
                    mx: 0,
                    mb: 0.5,
                    "& .MuiFormControlLabel-label": { width: "100%" },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Experience Filter */}
      <Accordion
        defaultExpanded
        sx={{
          boxShadow: "none",
          "&:before": { display: "none" },
          bgcolor: "transparent",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            px: 0,
            minHeight: "auto",
            "& .MuiAccordionSummary-content": { my: 1 },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
            Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup value={selectedExperience} onChange={handleExperienceChange}>
              {filters.experience.map((exp) => (
                <FormControlLabel
                  key={exp.name}
                  value={exp.name}
                  control={<Radio size="small" />}
                  label={
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                        {exp.name}
                      </Typography>
                      <Chip
                        label={formatCount(exp.count)}
                        size="small"
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          fontSize: "0.75rem",
                          height: 20,
                          minWidth: 28,
                        }}
                      />
                    </Box>
                  }
                  sx={{
                    mx: 0,
                    mb: 0.5,
                    "& .MuiFormControlLabel-label": { width: "100%" },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Paper>
  )
}
