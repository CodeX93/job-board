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
import { NEXT_PUBLIC_API_URL } from "../../connect"

export default function ExperienceFilter({ onExperienceChange, experiences = [] }) {
  const [selectedExperience, setSelectedExperience] = useState("")

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value)
    onExperienceChange([event.target.value])
  }

  return (
    <Accordion defaultExpanded sx={{
      boxShadow: "none",
      '&:before': { display: 'none' },
      mb: 1.5,
      borderRadius: 1.5,
    }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: 15 }}>
          Experience
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        {experiences.map((experience) => (
          <Box
            key={experience.name}
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
            onClick={(e) => {
              if (e.target.type !== 'radio') {
                setSelectedExperience(experience.name);
                onExperienceChange([experience.name]);
              }
            }}
          >
            <Radio
              size="small"
              checked={selectedExperience === experience.name}
              value={experience.name}
              onChange={handleExperienceChange}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: 14,
                whiteSpace: "normal",
                wordBreak: "break-word",
                pr: 1,
              }}
            >
              {experience.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#1976d2",
                fontWeight: 700,
                fontSize: 14,
                textAlign: "right",
                pl: 1,
              }}
            >
              {experience.count}
            </Typography>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}
