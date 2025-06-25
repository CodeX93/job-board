"use client"

import { Box, Container, Typography, Button } from "@mui/material"
import Image from "next/image"

const CTASection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f8fafc",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            borderRadius: 4,
            overflow: "hidden",
            height: { xs: "400px", md: "500px", lg: "550px" },
            display: "flex",
            alignItems: "center",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Background Image */}
          <Image
            src="/buisness_cta.png"
            alt="Professional businessman"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center right",
            }}
            priority
          />

          {/* Dark Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.6)",
              zIndex: 2,
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 10,
              maxWidth: { xs: "90%", md: "60%", lg: "55%" },
              color: "white",
              p: { xs: 4, md: 6, lg: 8 },
              pl: { xs: 4, md: 8, lg: 12 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: "2.2rem", md: "3.2rem", lg: "3.8rem" },
                lineHeight: { xs: 1.2, md: 1.15 },
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              Thinking of Scaling your Business to the Top Leagues?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 6,
                fontSize: { xs: "1.1rem", md: "1.3rem", lg: "1.4rem" },
                lineHeight: 1.6,
                color: "white",
                opacity: 0.95,
                maxWidth: { xs: "100%", md: "85%" },
                fontWeight: 400,
              }}
            >
              Post your First Job and get 2 steps closer to becoming a top company!
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "#1a1a1a",
                fontWeight: 600,
                px: 4,
                py: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Post a Job
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default CTASection