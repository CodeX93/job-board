"use client"

import { Typography, Button, Paper } from "@mui/material"

export default function SeekerCTASidebar() {
  return (
    <Paper
      sx={{
        bgcolor: "grey.900",
        color: "white",
        p: 4,
        borderRadius: 2,
        height: "fit-content",
        position: { lg: "sticky" },
        top: { lg: 24 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 3,
          fontSize: { xs: "1.5rem", sm: "1.75rem" },
          lineHeight: 1.3,
        }}
      >
        Get Hired! Add Your Profile!
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          lineHeight: 1.6,
          opacity: 0.9,
          fontSize: "1rem",
        }}
      >
        Let employers in Dubai, UAE and Saudi Arabia find you! Sign up and add your profile and be seen by hundreds of
        employers in the Middle East!
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "white",
          color: "grey.900",
          py: 1.5,
          borderRadius: 1,
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: 600,
          "&:hover": {
            bgcolor: "grey.100",
          },
        }}
      >
        Add my Profile
      </Button>
    </Paper>
  )
}
