"use client"

import { Box, Typography, IconButton, Avatar, Button } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"

export default function SeekerDetailHeader({ seeker, onBack }) {
  return (
    <Box sx={{ mb: 4 }}>
      <IconButton
        onClick={onBack}
        sx={{
          p: 1,
          mb: 3,
          "&:hover": { bgcolor: "grey.100" },
        }}
      >
        <ArrowBack />
        <Typography variant="body1" sx={{ ml: 1, fontWeight: 500 }}>
          Back
        </Typography>
      </IconButton>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: 3 }}>
        <Avatar
          sx={{
            bgcolor: "#8B0000",
            width: 100,
            height: 100,
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
            flexShrink: 0,
          }}
        >
          {seeker.name
            ?.split(" ")
            .map((n) => n[0])
            .join("") || "JS"}
        </Avatar>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.5rem", sm: "2rem" },
              color: "text.primary",
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            {seeker.title}
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "grey.900",
              color: "white",
              px: 3,
              py: 1,
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
      </Box>
    </Box>
  )
}
