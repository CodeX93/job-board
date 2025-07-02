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
import { NEXT_PUBLIC_API_URL } from "../../connect"
import { ExpandMore } from "@mui/icons-material"

export default function CategoryFilter({ onCategoryChange, categories = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
    onCategoryChange([event.target.value])
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
          Category
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
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
            onClick={(e) => {
              if (e.target.type !== 'radio') {
                setSelectedCategory(category.name);
                onCategoryChange([category.name]);
              }
            }}
          >
            <Radio
              size="small"
              checked={selectedCategory === category.name}
              value={category.name}
              onChange={handleCategoryChange}
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
              {category.name}
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
              {category.count}
            </Typography>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}
