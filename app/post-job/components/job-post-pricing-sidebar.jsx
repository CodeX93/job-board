"use client"

import { Box, Typography, Paper } from "@mui/material"

export default function JobPostPricingSidebar() {
  return (
    <Paper
      sx={{
        bgcolor: "#2a2a2a",
        color: "white",
        p: 4,
        borderRadius: 3,
        height: "fit-content",
        position: { md: "sticky" },
        top: { md: 24 },
        maxWidth: 320,
        border: "none",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Logo */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            bgcolor: "#1976d2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
            position: "relative",
          }}
        >
          {/* DNA Helix Icon - Simplified */}
          <Box
            sx={{
              width: 28,
              height: 28,
              position: "relative",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                width: "3px",
                height: "100%",
                bgcolor: "white",
                borderRadius: "2px",
                left: "6px",
                transform: "rotate(20deg)",
              },
              "&::after": {
                left: "16px",
                transform: "rotate(-20deg)",
              },
            }}
          >
            {/* DNA connection points */}
            <Box
              sx={{
                position: "absolute",
                width: "5px",
                height: "5px",
                bgcolor: "white",
                borderRadius: "50%",
                top: "4px",
                left: "4px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "5px",
                height: "5px",
                bgcolor: "white",
                borderRadius: "50%",
                top: "18px",
                left: "16px",
              }}
            />
          </Box>
        </Box>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600,
            fontSize: "1.2rem",
            letterSpacing: "0.5px"
          }}
        >
          CareerDNA
        </Typography>
      </Box>

      {/* Pricing Cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Price Card */}
        <Paper
          sx={{
            bgcolor: "#1976d2",
            color: "white",
            p: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                mb: 0.5,
                fontSize: "1.1rem"
              }}
            >
              Price
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.85,
                fontSize: "0.9rem"
              }}
            >
              For 30 Days
            </Typography>
          </Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              fontSize: "2rem"
            }}
          >
            $299
          </Typography>
        </Paper>

        {/* Reach Card */}
        <Paper
          sx={{
            bgcolor: "#1976d2",
            color: "white",
            p: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                mb: 0.5,
                fontSize: "1.1rem"
              }}
            >
              Reach
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.85,
                fontSize: "0.9rem"
              }}
            >
              tech workers/mo
            </Typography>
          </Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              fontSize: "1.6rem"
            }}
          >
            30,000+
          </Typography>
        </Paper>

        {/* Guaranteed Job Clicks Card */}
        <Paper
          sx={{
            bgcolor: "#1976d2",
            color: "white",
            p: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                mb: 0.5,
                fontSize: "1.1rem"
              }}
            >
              Guaranteed
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.85,
                fontSize: "0.9rem"
              }}
            >
              Job Clicks
            </Typography>
          </Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              fontSize: "1.6rem"
            }}
          >
            1,000+
          </Typography>
        </Paper>

        {/* Emailed Card */}
        <Paper
          sx={{
            bgcolor: "#1976d2",
            color: "white",
            p: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                mb: 0.5,
                fontSize: "1.1rem"
              }}
            >
              Emailed to
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                opacity: 0.85,
                fontSize: "0.9rem"
              }}
            >
              tech job seekers
            </Typography>
          </Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              fontSize: "1.6rem"
            }}
          >
            10,000+
          </Typography>
        </Paper>
      </Box>
    </Paper>
  )
}