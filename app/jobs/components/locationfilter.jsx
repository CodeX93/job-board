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

export default function LocationFilter({ onLocationChange, locations = [] }) {
  const [selectedLocation, setSelectedLocation] = useState("")

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value)
    onLocationChange([event.target.value])
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
          Location
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        {locations.map((location) => (
          <Box
            key={location.name}
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
                setSelectedLocation(location.name);
                onLocationChange([location.name]);
              }
            }}
          >
            <Radio
              size="small"
              checked={selectedLocation === location.name}
              value={location.name}
              onChange={handleLocationChange}
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
              {location.name}
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
              {location.count}
            </Typography>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}
