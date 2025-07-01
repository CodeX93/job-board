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

export default function ExperienceFilter({ onExperienceChange }) {
  const [experiences, setExperiences] = useState([])
  const [selectedExperience, setSelectedExperience] = useState("")

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/data/filters.json')
        const data = await response.json()
        setExperiences(data.experience)
      } catch (error) {
        setExperiences([])
      }
    }
    fetchExperiences()
  }, [])

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value)
    onExperienceChange([event.target.value])
  }

  return (
    <Accordion defaultExpanded sx={{ boxShadow: "none", '&:before': { display: 'none' }, mb: 2 }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Experience</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <RadioGroup value={selectedExperience} onChange={handleExperienceChange}>
          {experiences.map((experience) => (
            <FormControlLabel
              key={experience.name}
              value={experience.name}
              control={<Radio size="small" />}
              label={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Typography variant="body2">{experience.name}</Typography>
                  <Chip label={experience.count} size="small" color="primary" sx={{ ml: 1, fontWeight: 600 }} />
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
