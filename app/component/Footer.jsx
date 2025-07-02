"use client"

import { useState, useEffect } from "react"
import { Box, Container, Typography, Button, Grid, Link, IconButton, useTheme, useMediaQuery } from "@mui/material"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import Image from "next/image"

const Footer = () => {
  const [footerData, setFooterData] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    // Fetch footer navigation data
    const fetchFooterData = async () => {
      try {
        const response = await fetch("/footer_nav.json")

        const data = await response.json()
        setFooterData(data)
      } catch (error) {
        console.error("Error fetching footer data:", error)
      }
    }

    fetchFooterData()
  }, [])

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Twitter":
        return <TwitterIcon />
      case "Facebook":
        return <FacebookIcon />
      case "LinkedIn":
        return <LinkedInIcon />
      case "Instagram":
        return <InstagramIcon />
      default:
        return null
    }
  }

  if (!footerData) {
    return null
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#2a2a2a",
        color: "white",
        pt: 4,
        pb: 2,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            pb: 2,
            borderBottom: "1px solid #444",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
          }}
        >
          {/* Logo and Social Icons */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Image
                src="/logo_dark.png"
                alt="CareerDNA Logo"
                width={180}
                height={90}
                style={{ marginRight: 16, borderRadius: 8 }}
                priority
              />
             
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {footerData.socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  sx={{
                    color: "white",
                    bgcolor: "#444",
                    width: 32,
                    height: 32,
                    "&:hover": {
                      bgcolor: "#555",
                    },
                  }}
                >
                  {getSocialIcon(social.icon)}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Post a Job Button */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "#333",
              textTransform: "none",
              fontWeight: 'bolder',
              px: 3,
              py: 1,
              "&:hover": {
                bgcolor: "#f5f5f5",
              },
            }}
          >
            Post a Job
          </Button>
        </Box>

        {/* Navigation Columns */}
        <Grid container spacing={4}>
          {footerData.navigationColumns.map((column, columnIndex) => (
            <Grid item xs={12} sm={6} md={3} key={columnIndex}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: "1rem",
                }}
              >
                {column.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  maxHeight: { xs: "none", md: "400px" },
                  overflowY: { xs: "visible", md: "auto" },
                  "&::-webkit-scrollbar": {
                    width: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#444",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#666",
                    borderRadius: "2px",
                  },
                }}
              >
                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href="#"
                    sx={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      py: 0.25,
                      "&:hover": {
                        color: "#2196F3",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 2,
            borderTop: "1px solid #444",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#999",
              fontSize: "0.875rem",
            }}
          >
            © 2025 Career DNA
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
