"use client"

import { useState, useEffect } from "react"
import { Box, Container, Typography, Chip, useTheme, useMediaQuery } from "@mui/material"

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await fetch("/skills_data.json")
        const data = await response.json()
        setSkillsData(data)
      } catch (error) {
        console.error("Error fetching skills data:", error)
      }
    }

    fetchSkillsData()
  }, [])

  if (!skillsData) {
    return null
  }

  return (
    <Box
      sx={{
        bgcolor: "#f8f9fa",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "#333",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Most Companies Demand these skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 1.5, md: 2 },
            alignItems: "flex-start",
          }}
        >
          {skillsData.skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                bgcolor: "#2196F3",
                color: "white",
                fontWeight: 500,
                fontSize: { xs: "0.8rem", sm: "0.875rem", md: "0.9rem" },
                height: { xs: 36, sm: 40, md: 44 },
                borderRadius: 2,
                transition: "all 0.2s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#1976d2",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(33, 150, 243, 0.3)",
                },
                "& .MuiChip-label": {
                  px: { xs: 1.5, sm: 2, md: 2.5 },
                  py: { xs: 0.5, sm: 0.75, md: 1 },
                  whiteSpace: "nowrap",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default SkillsSection
