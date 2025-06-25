"use client"

import { Box, Typography, Paper } from "@mui/material"

export default function RegisterStatsSidebar() {
  return (
    <Paper
      sx={{
        bgcolor: "grey.900",
        color: "white",
        p: 4,
        borderRadius: 2,
        height: "fit-content",
        position: { md: "sticky" },
        top: { md: 24 },
      }}
    >
      {/* Logo */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            bgcolor: "primary.main",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            X
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          CareerDNA
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Reach Card */}
        <Paper
          sx={{
            bgcolor: "primary.main",
            color: "white",
            p: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              Reach
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              tech workers/mo
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            30,000+
          </Typography>
        </Paper>

        {/* Guaranteed Job Clicks Card */}
        <Paper
          sx={{
            bgcolor: "primary.main",
            color: "white",
            p: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              Guaranteed
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Job Clicks
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            1,000+
          </Typography>
        </Paper>

        {/* Emailed Card */}
        <Paper
          sx={{
            bgcolor: "primary.main",
            color: "white",
            p: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              Emailed to
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              tech job seekers
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            10,000+
          </Typography>
        </Paper>
      </Box>
    </Paper>
  )
}
