"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { useRouter } from "next/navigation"
import { NEXT_PUBLIC_API_URL } from "../../connect"

const HeroSection = () => {
  const [jobsData, setJobsData] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))
  const router = useRouter()
  const BASE_URL = NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const response = await fetch(BASE_URL + '/job_data.json')
        const data = await response.json()
        setJobsData(data)
      } catch (error) {
        console.error("Error fetching jobs data:", error)
      }
    }

    fetchJobsData()
  }, [])

  const getVisibleCards = () => {
    if (isMobile) return 1
    if (isTablet) return 2
    return 3
  }

  const nextSlide = () => {
    if (jobsData) {
      const visibleCards = getVisibleCards()
      const maxSlide = jobsData.popularJobs.length - visibleCards
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
    }
  }

  const prevSlide = () => {
    if (jobsData) {
      const visibleCards = getVisibleCards()
      const maxSlide = jobsData.popularJobs.length - visibleCards
      setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
    }
  }

  if (!jobsData) {
    return null
  }

  return (
    <Box
      sx={{
        bgcolor: "#f8f9fa",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Background Decorative Element */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -200,
          width: 800,
          height: 600,
          borderRadius: "50%",
          border: "40px solid #e3f2fd",
          opacity: 0.6,
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: -50,
          left: -300,
          width: 600,
          height: 400,
          borderRadius: "50%",
          border: "30px solid #e3f2fd",
          opacity: 0.4,
          display: { xs: "none", md: "block" },
        }}
      />

      <Container maxWidth="xl">
        {/* Hero Content */}
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
              fontWeight: "bold",
              mb: 3,
              lineHeight: 1.1,
              color: "#333",
            }}
          >
            Land Your{" "}
            <Box component="span" sx={{ color: "#2196F3" }}>
              Next Role
            </Box>{" "}
            With
            <br />
          <Box component="span" sx={{ color: "#2196F3" }}>
            Precision
            </Box>{" "}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#666",
              mb: 4,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.4,
            }}
          >
            A smarter job board powered by real-time data.
            <br />
            Find your next opportunity — faster.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push('/jobs')}
              sx={{
                bgcolor: "#333",
                color: "white",
                textTransform: "none",
                fontWeight: 500,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                "&:hover": {
                  bgcolor: "#555",
                },
              }}
            >
              Get Started - Find a Job Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push('/post-job')}
              sx={{
                borderColor: "#ddd",
                color: "#333",
                textTransform: "none",
                fontWeight: 500,
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                "&:hover": {
                  borderColor: "#bbb",
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              Post a Job
            </Button>
          </Box>
        </Box>

       

        {/* Popular Jobs Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 4,
              color: "#333",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            Popular Jobs for you
          </Typography>

          {/* Job Cards Slider */}
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                transition: "transform 0.3s ease-in-out",
                transform: `translateX(-${currentSlide * (100 / getVisibleCards())}%)`,
              }}
            >
              {jobsData.popularJobs.map((job) => (
                <Card
                  key={job.id}
                  sx={{
                    width: 'auto',
                    minWidth: 260,
                    maxWidth: 340,
                    background: "linear-gradient(135deg, #2196F3 0%, #1E88E5 100%)",
                    color: "white",
                    borderRadius: 3,
                    flexShrink: 0,
                    border: "1.5px solid #6EC6FF",
                    boxShadow: "0 2px 12px 0 rgba(33,150,243,0.10)",
                    height: 'auto',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "stretch",
                    p: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      p: 3,
                      "&:last-child": { pb: 3 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.35rem",
                        mb: 0.5,
                        color: "white",
                        lineHeight: 1.2,
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#B3E0FF",
                        fontWeight: 'bolder',
                        mb: 1.5,
                        fontSize: "1.05rem",
                      }}
                    >
                      {job.company}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 2,
                        overflow: "hidden",
                        maxHeight: "100%",
                      }}
                    >
                      {[job.salary, ...job.tags].map((label, index) => (
                        <Chip
                          key={index}
                          label={label}
                          sx={{
                            bgcolor: "#B3E0FF",
                            color: "#1E3A5C",
                            fontWeight: 600,
                            fontSize: "0.78rem",
                            borderRadius: 2,
                            px: 0.5,
                            height: 26,
                            maxWidth: "100%",
                            justifyContent: "flex-start",
                            whiteSpace: "normal",
                            lineHeight: 1.1,
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ flex: 1 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#B3E0FF",
                        fontWeight: 400,
                        fontSize: "1rem",
                        mt: 1,
                      }}
                    >
                      {job.location}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Navigation Arrows */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              sx={{
                position: "absolute",
                right: -20,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": {
                  bgcolor: "#f5f5f5",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>

         {/* Statistics Section - now above Popular Jobs */}
         <Grid container spacing={4} justifyContent="center" sx={{ textAlign: "center", mb: 8 }}>
          {jobsData.statistics.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#2196F3",
                  fontSize: { xs: "3rem", md: "4rem" },
                  mb: 1,
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                {stat.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSection
