"use client"

import { Box, Typography, Button } from "@mui/material"

export default function SeekerAboutSection({ aboutMe }) {
  const paragraphs = aboutMe.split("\n\n")

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
        About Me
      </Typography>

      {paragraphs.map((paragraph, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            lineHeight: 1.7,
            mb: 3,
            color: "text.primary",
            fontSize: "1rem",
          }}
        >
          {paragraph}
        </Typography>
      ))}

      <Button
        variant="contained"
        sx={{
          bgcolor: "grey.900",
          color: "white",
          px: 3,
          py: 1.5,
          borderRadius: 1,
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: 500,
          "&:hover": {
            bgcolor: "grey.800",
          },
        }}
      >
        Contact Me
      </Button>
    </Box>
  )
}
