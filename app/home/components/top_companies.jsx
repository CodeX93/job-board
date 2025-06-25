"use client"

import { useState, useEffect } from "react"
import { Box, Container, Typography, Card, CardContent, Button, Avatar, useTheme } from "@mui/material"
import { useRouter } from "next/navigation"

const TopCompanies = () => {
  const [companiesData, setCompaniesData] = useState(null)
  const theme = useTheme()
  const router = useRouter()

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const response = await fetch("/companies_data.json")
        const data = await response.json()
        setCompaniesData(data)
      } catch (error) {
        console.error("Error fetching companies data:", error)
      }
    }

    fetchCompaniesData()
  }, [])

  const getCompanyLogo = (logoType, color, name) => {
    const logoProps = {
      width: 64,
      height: 64,
      mb: 2,
    }

    switch (logoType) {
      case "canonical":
        return (
          <Avatar sx={{ ...logoProps, bgcolor: "#E95420" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "2px solid white",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 6,
                    height: 6,
                    bgcolor: "white",
                    borderRadius: "50%",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 2,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 3,
                    height: 3,
                    bgcolor: "white",
                    borderRadius: "50%",
                  },
                }}
              />
            </Box>
          </Avatar>
        )
      case "oracle":
        return (
          <Avatar sx={{ ...logoProps, bgcolor: "#C74634" }}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "0.75rem" }}>
              Oracle
            </Typography>
          </Avatar>
        )
      case "presight":
        return (
          <Avatar 
            sx={{ 
              ...logoProps, 
              background: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 2,
                    left: 2,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    bgcolor: "rgba(255, 255, 255, 0.6)",
                  },
                }}
              />
            </Box>
          </Avatar>
        )
      case "aws":
        return (
          <Avatar sx={{ ...logoProps, bgcolor: "#232F3E" }}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "0.75rem" }}>
              aws
            </Typography>
          </Avatar>
        )
      case "emirates":
        return (
          <Avatar sx={{ ...logoProps, bgcolor: "#C8102E" }}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "0.6rem", textAlign: "center" }}>
              Emirates
            </Typography>
          </Avatar>
        )
      case "talabat":
        return (
          <Avatar sx={{ ...logoProps, bgcolor: "#FF6B35" }}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "0.7rem" }}>
              talabat
            </Typography>
          </Avatar>
        )
      case "core42":
        return (
          <Avatar 
            sx={{ 
              ...logoProps, 
              background: "linear-gradient(135deg, #00D2A5 0%, #00A085 100%)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "rgba(255, 255, 255, 0.7)",
                  }}
                />
              </Box>
            </Box>
          </Avatar>
        )
      case "cognizant":
        return (
          <Avatar sx={{ ...logoProps, bgcolor: "#1B365D" }}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "0.5rem", textAlign: "center" }}>
              cognizant
            </Typography>
          </Avatar>
        )
      default:
        return (
          <Avatar sx={{ ...logoProps, bgcolor: color || "#333", color: "white", fontSize: "1.2rem", fontWeight: "bold" }}>
            {name.charAt(0)}
          </Avatar>
        )
    }
  }

  if (!companiesData) {
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
          Top Companies for Software Engineers
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Box 
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 3 },
              mb: 4,
            }}
          >
            {companiesData.topCompanies.map((company) => (
              <Box 
                key={company.id}
                sx={{
                  // Explicit width calculations for 4 columns
                  width: { 
                    xs: '100%', // 1 column on mobile
                    sm: 'calc(50% - 12px)', // 2 columns on small screens
                    md: 'calc(25% - 18px)', // 4 columns on medium screens and up
                    lg: 'calc(25% - 18px)', // 4 columns on large screens
                    xl: 'calc(25% - 18px)', // 4 columns on xl screens
                  },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    height: "280px",
                    borderRadius: 3,
                    border: "1px solid #e0e0e0",
                    bgcolor: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                      transform: "translateY(-4px)",
                    },
                    cursor: "pointer",
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    {getCompanyLogo(company.logo, company.color, company.name)}

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                        color: "#333",
                        fontSize: "1.1rem",
                      }}
                    >
                      {company.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        mb: 2,
                        fontSize: "0.85rem",
                        fontWeight: 500,
                      }}
                    >
                      {company.jobCount} Jobs in Tech
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#777",
                        lineHeight: 1.4,
                        fontSize: "0.8rem",
                        textAlign: "left",
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {company.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Apply to Best Companies Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => router.push('/companies')}
            sx={{
              borderColor: "#ddd",
              color: "#333",
              textTransform: "none",
              fontWeight: 500,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: 3,
              "&:hover": {
                borderColor: "#bbb",
                bgcolor: "#f5f5f5",
              },
            }}
          >
            Apply to the Best Companies
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default TopCompanies