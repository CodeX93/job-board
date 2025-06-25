"use client"

import { Box, Typography, Chip } from "@mui/material"

export default function RequiredSkills({ skills }) {
  const skillColors = ["primary", "secondary", "success", "warning", "info", "error"]

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Required Skills
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            color={skillColors[index % skillColors.length]}
            variant="filled"
            sx={{ fontWeight: 500 }}
          />
        ))}
      </Box>
    </Box>
  )
}
