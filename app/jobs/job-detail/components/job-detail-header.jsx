"use client"

import { Box, Typography, IconButton, Avatar } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"

export default function JobDetailHeader({ job, onBack }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 3,
        pb: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <IconButton onClick={onBack} sx={{ p: 1 }}>
        <ArrowBack />
      </IconButton>

      <Avatar
        sx={{
          bgcolor: "error.main",
          width: 48,
          height: 48,
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        E
      </Avatar>

      <Box>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
          {job.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.company} {job.location}
        </Typography>
      </Box>
    </Box>
  )
}
