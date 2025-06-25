"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material"
import FlashOnIcon from "@mui/icons-material/FlashOn"
import { useRouter } from "next/navigation"

const JobListings = () => {
  const [jobsData, setJobsData] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))
  const router = useRouter()

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const response = await fetch("/job_listing.json")
        const data = await response.json()
        setJobsData(data)
      } catch (error) {
        console.error("Error fetching jobs data:", error)
      }
    }

    fetchJobsData()
  }, [])

  const getCompanyLogo = (logoType) => {
    if (logoType === "oryx") {
      return (
        <Avatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: "#4a90e2",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          <FlashOnIcon />
        </Avatar>
      )
    } else {
      return (
        <Avatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: "#d32f2f",
            color: "white",
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
        >
          Emirates
        </Avatar>
      )
    }
  }

  const getChipColor = (type) => {
    switch (type) {
      case "category":
        return { bgcolor: "#e3f2fd", color: "#1976d2" }
      case "salary":
        return { bgcolor: "#e8f5e8", color: "#2e7d32" }
      case "benefit":
        return { bgcolor: "#f3e5f5", color: "#7b1fa2" }
      default:
        return { bgcolor: "#f5f5f5", color: "#666" }
    }
  }

  if (!jobsData) {
    return null
  }

  return (
    <Box
      sx={{
        bgcolor: "#f8f9fa",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "#333",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Find the Best Job for You
        </Typography>

        <Stack spacing={2} sx={{ mb: 4 }}>
          {jobsData.jobListings.map((job) => (
            <Card
              key={job.id}
              sx={{
                borderRadius: 3,
                border: job.highlighted ? "2px solid #2196F3" : "1px solid #e0e0e0",
                bgcolor: job.featured ? "#2196F3" : "white",
                color: job.featured ? "white" : "#333",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: job.featured ? 4 : 2,
                  transform: "translateY(-2px)",
                },
                cursor: "pointer",
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2, md: 3 },
                  "&:last-child": { pb: { xs: 2, md: 3 } },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 2, md: 3 },
                  }}
                >
                  {/* Left Section - Logo and Job Info */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      flex: 1,
                      width: { xs: "100%", md: "auto" },
                    }}
                  >
                    {getCompanyLogo(job.logo)}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          mb: 0.5,
                          fontSize: { xs: "1.1rem", md: "1.3rem" },
                          lineHeight: 1.2,
                          color: job.featured ? "white" : "#333",
                        }}
                      >
                        {job.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: job.featured ? "rgba(255,255,255,0.9)" : "#666",
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          fontWeight: 500,
                        }}
                      >
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                          {job.company}
                        </Box>{" "}
                        {job.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Right Section - Tags */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      alignItems: "flex-start",
                      justifyContent: { xs: "flex-start", md: "flex-end" },
                      width: { xs: "100%", md: "auto" },
                      maxWidth: { xs: "100%", md: "60%" },
                    }}
                  >
                    {job.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag.label}
                        sx={{
                          ...(job.featured
                            ? {
                                bgcolor: "rgba(255,255,255,0.2)",
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.3)",
                              }
                            : getChipColor(tag.type)),
                          fontWeight: 500,
                          fontSize: { xs: "0.75rem", md: "0.8rem" },
                          height: { xs: 28, md: 32 },
                          "& .MuiChip-label": {
                            px: { xs: 1, md: 1.5 },
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* Find More Jobs Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
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
              borderRadius: 2,
              "&:hover": {
                bgcolor: "#555",
              },
            }}
          >
            Find More Jobs
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default JobListings
