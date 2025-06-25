"use client"

import { useState, useEffect } from "react"
import { Box, Typography, Button, Alert } from "@mui/material"
import CompanyCard from "./companies_card"
import CompanyDetailsModal from "./company-detail-modal"

export default function CompaniesList({ companies = [] }) {
  const [displayedCompanies, setDisplayedCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [showCompanyDetails, setShowCompanyDetails] = useState(false)
  const [companiesToShow, setCompaniesToShow] = useState(6)

  useEffect(() => {
    setDisplayedCompanies(companies.slice(0, companiesToShow))
    setCompaniesToShow(6) // Reset when companies change
  }, [companies])

  useEffect(() => {
    setDisplayedCompanies(companies.slice(0, companiesToShow))
  }, [companies, companiesToShow])

  const handleCompanyClick = (company) => {
    setSelectedCompany(company)
    setShowCompanyDetails(true)
  }

  const handleLoadMore = () => {
    setCompaniesToShow((prev) => prev + 6)
  }

  const hasMoreCompanies = displayedCompanies.length < companies.length

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        {displayedCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </Box>

      {displayedCompanies.length === 0 && companies.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Alert severity="info" sx={{ maxWidth: 400, mx: "auto" }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              No companies found
            </Typography>
            <Typography variant="body2">Try adjusting your search or filter criteria.</Typography>
          </Alert>
        </Box>
      )}

      {hasMoreCompanies && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleLoadMore}
            sx={{
              bgcolor: "grey.800",
              color: "white",
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              fontWeight: 600,
              "&:hover": {
                bgcolor: "grey.900",
              },
            }}
          >
            Load More Companies
          </Button>
        </Box>
      )}

      <CompanyDetailsModal
        company={selectedCompany}
        isOpen={showCompanyDetails}
        onClose={() => {
          setShowCompanyDetails(false)
          setSelectedCompany(null)
        }}
      />
    </Box>
  )
}
