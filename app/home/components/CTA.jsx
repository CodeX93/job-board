"use client"

import { Box, Container, Typography, Button } from "@mui/material"
import Image from "next/image"

const CTASection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f8fafc",
        py: { xs: 4, sm: 6, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            borderRadius: 4,
            overflow: "hidden",
            height: { xs: 260, sm: 320, md: 500, lg: 550 },
            display: "flex",
            alignItems: { xs: "center", md: "center" },
            justifyContent: { xs: "center", md: "flex-start" },
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
              backdropFilter: 'blur(2.5px)',
              zIndex: 2,
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 10,
              maxWidth: { xs: "98%", sm: "90%", md: "60%", lg: "55%" },
              color: "white",
              p: { xs: 2, sm: 3, md: 6, lg: 8 },
              pl: { xs: 2, sm: 3, md: 8, lg: 12 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.35rem", sm: "1.7rem", md: "3.2rem", lg: "3.8rem" },
                lineHeight: { xs: 1.18, md: 1.15 },
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              Thinking of Scaling your Business to the Top Leagues?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.98rem", sm: "1.08rem", md: "1.3rem", lg: "1.4rem" },
                lineHeight: 1.5,
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
              fullWidth
              sx={{
                bgcolor: "white",
                color: "#1a1a1a",
                fontWeight: 600,
                px: { xs: 0, sm: 3, md: 4 },
                py: { xs: 1.2, sm: 1.5, md: 1.8 },
                fontSize: { xs: "0.98rem", sm: "1.05rem", md: "1.1rem" },
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                transition: "all 0.2s ease",
                mt: { xs: 1, md: 0 },
                maxWidth: { xs: 320, sm: 340, md: 'none' },
                alignSelf: { xs: 'center', md: 'flex-start' },
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