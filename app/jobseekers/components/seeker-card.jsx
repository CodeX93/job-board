"use client"

import { Box, Paper, Typography, Chip, Avatar } from "@mui/material"
import { useRouter } from "next/navigation"

export default function SeekerCard({ seeker, onClick }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/jobseekers/${seeker.id}`)
  }

  return (
    <Paper
      sx={{
        p: 3,
        mb: 2,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "grey.300",
        bgcolor: "white",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: 2,
          transform: "translateY(-1px)",
        },
      }}
      onClick={handleClick}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: "#8B0000",
            width: 60,
            height: 60,
            fontSize: "1rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {seeker.name
            ?.split(" ")
            .map((n) => n[0])
            .join("") || "JS"}
        </Avatar>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: "1.1rem",
              color: "text.primary",
              lineHeight: 1.4,
              mb: 0.5,
            }}
          >
            {seeker.title}
          </Typography>
        </Box>

        <Chip
          label={seeker.status}
          sx={{
            bgcolor: "#C0DFFF",
            color: "#1A1714",
            fontWeight: 700,
            fontSize: "0.875rem",
            px: 2,
            py: 0.5,
            borderRadius: 1,
          }}
        />
      </Box>
    </Paper>
  )
}
