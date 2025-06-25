"use client"

import { Box, Typography, Button, Paper } from "@mui/material"

export default function CompanySidebar({ company, job }) {
  return (
    <Paper
      sx={{
        bgcolor: "grey.900",
        color: "white",
        p: 3,
        borderRadius: 2,
        position: { lg: "sticky" },
        top: { lg: 24 },
        height: "fit-content",
        minHeight: { xs: "auto", lg: "600px" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            bgcolor: "error.main",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Emirates
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
            {company.name}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            {company.location}
          </Typography>
        </Box>
      </Box>

      <Typography variant="caption" sx={{ opacity: 0.7, mb: 3, display: "block" }}>
        {job.datePosted}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
        <Button variant="contained" color="primary" size="medium" sx={{ flex: 1, py: 1 }}>
          Apply Now
        </Button>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
              bgcolor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          Save for Later
        </Button>
      </Box>

      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        About {company.name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 4, lineHeight: 1.6, opacity: 0.9 }}>
        {company.about}
      </Typography>

      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Benefits at {company.name}
      </Typography>
      <Box component="ul" sx={{ pl: 2, mb: 4, "& li": { mb: 1 } }}>
        {company.benefits.map((benefit, index) => (
          <Typography component="li" key={index} variant="body2" sx={{ opacity: 0.9, lineHeight: 1.5 }}>
            {benefit}
          </Typography>
        ))}
      </Box>

      <Button
        variant="outlined"
        fullWidth
        sx={{
          color: "white",
          borderColor: "white",
          py: 1.5,
          "&:hover": {
            bgcolor: "rgba(255,255,255,0.1)",
            borderColor: "white",
          },
        }}
      >
        Know More about {company.name}
      </Button>
    </Paper>
  )
}
