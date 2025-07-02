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

export default function SeekerFilterSidebar({ onCategoryChange, onExperienceChange, categories = [], experience = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedExperience, setSelectedExperience] = useState("")

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
        bgcolor: "#fff",
        p: 2,
        borderRadius: 2,
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        border: '1px solid #e0e0e0',
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
      <Paper elevation={1} sx={{ mb: 2, p: 1.5, borderRadius: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', border: '1px solid #e0e0e0', bgcolor: '#fff' }}>
        <Accordion
          defaultExpanded
          sx={{
            boxShadow: "none",
            "&:before": { display: "none" },
            bgcolor: "transparent",
            mb: 0,
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
                {categories.map((category) => (
                  <Box
                    key={category.name}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '20% 60% 20%',
                      alignItems: 'center',
                      width: '100%',
                      mb: 0.5,
                      pl: 1,
                      pr: 1,
                      cursor: 'pointer',
                      borderRadius: 1,
                      minHeight: 24,
                      transition: 'background 0.2s',
                      '&:hover': { background: '#f3f4f6' },
                      py: 0.1,
                    }}
                    onClick={() => handleCategoryChange({ target: { value: category.name } })}
                  >
                    <Radio
                      checked={selectedCategory === category.name}
                      value={category.name}
                      size="small"
                      sx={{ p: 0.5 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ fontSize: '0.875rem', wordBreak: 'break-word', pr: 1 }}
                    >
                      {category.name}
                    </Typography>
                    <Typography
                      sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.85rem', textAlign: 'right' }}
                    >
                      {formatCount(category.count)}
                    </Typography>
                  </Box>
                ))}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Paper>

      {/* Experience Filter */}
      <Paper elevation={1} sx={{ mb: 2, p: 1.5, borderRadius: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', border: '1px solid #e0e0e0', bgcolor: '#fff' }}>
        <Accordion
          defaultExpanded
          sx={{
            boxShadow: "none",
            "&:before": { display: "none" },
            bgcolor: "transparent",
            mb: 0,
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
                {experience.map((exp) => (
                  <Box
                    key={exp.name}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '20% 60% 20%',
                      alignItems: 'center',
                      width: '100%',
                      mb: 0.5,
                      pl: 1,
                      pr: 1,
                      cursor: 'pointer',
                      borderRadius: 1,
                      minHeight: 24,
                      transition: 'background 0.2s',
                      '&:hover': { background: '#f3f4f6' },
                      py: 0.1,
                    }}
                    onClick={() => handleExperienceChange({ target: { value: exp.name } })}
                  >
                    <Radio
                      checked={selectedExperience === exp.name}
                      value={exp.name}
                      size="small"
                      sx={{ p: 0.5 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ fontSize: '0.875rem', wordBreak: 'break-word', pr: 1 }}
                    >
                      {exp.name}
                    </Typography>
                    <Typography
                      sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.85rem', textAlign: 'right' }}
                    >
                      {formatCount(exp.count)}
                    </Typography>
                  </Box>
                ))}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Paper>
  )
}
