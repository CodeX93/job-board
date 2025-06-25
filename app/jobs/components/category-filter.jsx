"use client"

import { useState, useEffect } from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Chip,
  Box,
} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"

export default function CategoryFilter({ onCategoryChange }) {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/data/filters.json")
        const data = await response.json()
        setCategories(data.categories)
      } catch (error) {
        setCategories([])
      }
    }
    fetchCategories()
  }, [])

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
    onCategoryChange([event.target.value])
  }

  return (
    <Accordion defaultExpanded sx={{ boxShadow: "none", '&:before': { display: 'none' }, mb: 2 }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Category</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <RadioGroup value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <FormControlLabel
              key={category.name}
              value={category.name}
              control={<Radio size="small" />}
              label={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Typography variant="body2">{category.name}</Typography>
                  <Chip label={category.count} size="small" color="primary" sx={{ ml: 1, fontWeight: 600 }} />
                </Box>
              }
              sx={{ m: 0, pl: 1, pr: 1, width: '100%' }}
            />
          ))}
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  )
}
