"use client"

import { Box, Typography, Chip } from "@mui/material"

export default function SeekerSkillsSection({ skills }) {
  const skillColors = [
    { bg: "#1976d2", color: "white" },
    { bg: "#1976d2", color: "white" },
    { bg: "#1976d2", color: "white" },
    { bg: "#1976d2", color: "white" },
    { bg: "#1976d2", color: "white" },
    { bg: "#1976d2", color: "white" },
  ]

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: "text.primary",
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
        }}
      >
        My Skills
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
        {skills.map((skill, index) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              bgcolor: skillColors[index % skillColors.length].bg,
              color: skillColors[index % skillColors.length].color,
              fontWeight: 500,
              fontSize: "0.875rem",
              px: 2,
              py: 0.5,
              height: "auto",
              "& .MuiChip-label": {
                px: 2,
                py: 1,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
