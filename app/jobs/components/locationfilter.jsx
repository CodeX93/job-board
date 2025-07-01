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

export default function LocationFilter({ onLocationChange }) {
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState("")

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/data/filters.json')
        const data = await response.json()
        setLocations(data.locations)
      } catch (error) {
        setLocations([])
      }
    }
    fetchLocations()
  }, [])

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value)
    onLocationChange([event.target.value])
  }

  return (
    <Accordion defaultExpanded sx={{ boxShadow: "none", '&:before': { display: 'none' }, mb: 2 }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Location</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <RadioGroup value={selectedLocation} onChange={handleLocationChange}>
          {locations.map((location) => (
            <FormControlLabel
              key={location.name}
              value={location.name}
              control={<Radio size="small" />}
              label={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Typography variant="body2">{location.name}</Typography>
                  <Chip label={location.count} size="small" color="primary" sx={{ ml: 1, fontWeight: 600 }} />
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
