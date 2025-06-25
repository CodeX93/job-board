"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Link as MuiLink,
} from "@mui/material"
import { ArrowBack, Business, LocationOn } from "@mui/icons-material"
import Link from "next/link"

const infoCardStyle = {
  bgcolor: "#1976d2",
  color: "#fff",
  borderRadius: 2,
  px: 3,
  py: 2,
  mb: 2,
  textAlign: "left",
  boxShadow: 2,
}

export default function CompanyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [company, setCompany] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await fetch("/companies.json")
        const data = await res.json()
        const found = data.companies.find((c) => String(c.id) === String(params.id))
        setCompany(found)
      } catch (e) {
        setCompany(null)
      } finally {
        setLoading(false)
      }
    }
    fetchCompany()
  }, [params.id])

  if (loading) return <Box sx={{ p: 8, textAlign: "center" }}>Loading...</Box>
  if (!company) return <Box sx={{ p: 8, textAlign: "center" }}>Company not found.</Box>

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.50" }}>
      <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 } }}>
        {/* Back Button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.back()}
          sx={{ mb: 2, fontWeight: 500, fontSize: "1rem", textTransform: "none" }}
        >
          Back
        </Button>
        <Grid container spacing={4}>
          {/* Main Content - Left Side */}
          <Grid item xs={12} lg={8} sx={{ order: { xs: 2, lg: 1 } }}>
            {/* Header Row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mb: 3,
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 3, minWidth: 0 }}>
                <Avatar
                  src={company.logo}
                  sx={{ width: 72, height: 72, bgcolor: "error.main", fontSize: "2rem", fontWeight: "bold" }}
                >
                  <Business sx={{ fontSize: 40 }} />
                </Avatar>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5, fontSize: { xs: "1.5rem", sm: "2rem" } }}>
                    Senior Software Engineer
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                    <MuiLink
                      component={Link}
                      href="#"
                      underline="hover"
                      sx={{ color: "#1976d2", fontWeight: 500, fontSize: "1.1rem" }}
                    >
                      {company.name}
                    </MuiLink>
                    <Typography sx={{ color: "text.secondary", fontSize: "1.1rem" }}>
                      {company.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexShrink: 0 }}>
                <Button variant="contained" color="grey" sx={{ bgcolor: "#111", color: "#fff", fontWeight: 600, px: 3, boxShadow: 0, borderRadius: 2, '&:hover': { bgcolor: "#222" } }}>
                  Apply Now
                </Button>
                <Button variant="outlined" color="inherit" sx={{ fontWeight: 600, px: 3, borderRadius: 2, borderColor: "#bbb", color: "#222" }}>
                  Save for Later
                </Button>
              </Box>
              <Typography sx={{ color: "#888", fontSize: "1rem", position: { lg: "absolute" }, right: 0, top: 0, mt: { xs: 2, lg: 0 } }}>
                19 June 2025
              </Typography>
            </Box>
            {/* Fly Better Section */}
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, fontSize: "1.3rem" }}>
              Fly Better
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem" }}>
              {company.about || company.description}
            </Typography>
            {/* Benefits Section */}
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, fontSize: "1.3rem" }}>
              Benefits at {company.name}
            </Typography>
            <List sx={{ mb: 3, pl: 2 }}>
              {(company.benefits || []).map((benefit, idx) => (
                <ListItem key={idx} sx={{ display: "list-item", listStyleType: "disc", pl: 1, py: 0.5 }}>
                  <Typography variant="body1" sx={{ fontSize: "1.05rem" }}>{benefit}</Typography>
                </ListItem>
              ))}
            </List>
            {/* Jobs at Company Section */}
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, fontSize: "1.3rem" }}>
              Jobs at {company.name}
            </Typography>
            <Grid container spacing={2}>
              {(company.jobs || []).map((job) => (
                <Grid item xs={12} key={job.id}>
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      boxShadow: 0,
                      borderColor: "#b6c2d1",
                      bgcolor: "#f8fafc",
                      transition: "box-shadow 0.2s, transform 0.2s",
                      '&:hover': { boxShadow: 4, transform: "translateY(-2px)" },
                    }}
                  >
                    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2, py: 2 }}>
                      <Avatar src={job.logo} sx={{ width: 48, height: 48, bgcolor: "error.main" }}>
                        <Business />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
                          {job.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1rem" }}>
                          {company.name} &nbsp; {job.location}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                          {(job.tags || []).map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag.label}
                              size="small"
                              color={
                                tag.label === "Software & Engineering"
                                  ? "primary"
                                  : tag.label === "Visa Sponsorship"
                                  ? "info"
                                  : tag.label === "Apply from Abroad"
                                  ? "secondary"
                                  : "default"
                              }
                              sx={{ fontWeight: 600, fontSize: "0.95rem", bgcolor: tag.label === "Visa Sponsorship" ? "#e3f2fd" : undefined }}
                            />
                          ))}
                        </Box>
                      </Box>
                      <Button variant="contained" color="info" sx={{ fontWeight: 600, px: 2, mr: 1, borderRadius: 2, bgcolor: "#e3f2fd", color: "#1976d2", boxShadow: 0, '&:hover': { bgcolor: "#bbdefb" } }}>
                        Apply from Abroad
                      </Button>
                      <Button variant="outlined" color="primary" sx={{ fontWeight: 600, px: 2, borderRadius: 2, borderColor: "#b6c2d1" }}>
                        Support
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* Sidebar - Right Side */}
          <Grid item xs={12} lg={4} sx={{ order: { xs: 1, lg: 2 } }}>
            <Paper elevation={4} sx={{ borderRadius: 3, p: 3, bgcolor: "#111", color: "#fff", mb: 3, minWidth: 260 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <Avatar src={company.logo} sx={{ width: 80, height: 80, bgcolor: "error.main", mb: 2 }}>
                  <Business sx={{ fontSize: 40 }} />
                </Avatar>
                {/* Blue Info Cards */}
                <Box sx={{ width: "100%", mt: 2 }}>
                  <Box sx={infoCardStyle}>
                    <Typography variant="body2" sx={{ color: "#b3e5fc", fontWeight: 500 }}>
                      Founded
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff", fontSize: "2rem" }}>
                      {company.foundedYear || company.founded}
                    </Typography>
                  </Box>
                  <Box sx={infoCardStyle}>
                    <Typography variant="body2" sx={{ color: "#b3e5fc", fontWeight: 500 }}>
                      Headquarters
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff", fontSize: "2rem" }}>
                      {company.headquarters || company.location}
                    </Typography>
                  </Box>
                  <Box sx={infoCardStyle}>
                    <Typography variant="body2" sx={{ color: "#b3e5fc", fontWeight: 500 }}>
                      Industry
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#fff", fontSize: "2rem" }}>
                      {company.industryDetails || company.industry}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 