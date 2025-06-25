"use client"

import { useState, useEffect } from "react"
import { Container, Typography, Box } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import CompaniesList from "./components/company_lists"
import CompaniesSearch from "./components/companies-search"
import Navbar from "../component/Navbar"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([])
  const [filteredCompanies, setFilteredCompanies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({ industry: "", location: "" })

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("/companies.json")
        const data = await response.json()
        setCompanies(data.companies)
        setFilteredCompanies(data.companies)
      } catch (error) {
        console.error("Error fetching companies:", error)
      }
    }

    fetchCompanies()
  }, [])

  useEffect(() => {
    let filtered = companies

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (company) =>
          company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
          company.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by industry
    if (filters.industry) {
      filtered = filtered.filter((company) => company.industry === filters.industry)
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((company) => company.location === filters.location)
    }

    setFilteredCompanies(filtered)
  }, [searchTerm, filters, companies])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleFilter = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box sx={{ minHeight: "100vh", bgcolor: "grey.50" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 4, md: 6 } }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 4, md: 6 },
              color: "text.primary",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Find the Best Companies with Career DNA
          </Typography>

          <CompaniesSearch onSearch={handleSearch} onFilter={handleFilter} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
              Showing {filteredCompanies.length} companies
            </Typography>
          </Box>

          <CompaniesList companies={filteredCompanies} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}
