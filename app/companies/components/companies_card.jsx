"use client"

import { Card, CardContent, Box, Typography, Chip, Avatar } from "@mui/material"
import { Business } from "@mui/icons-material"
import Link from "next/link"

export default function CompanyCard({ company }) {
  return (
    <Link href={`/companies/${company.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          cursor: "pointer",
          "&:hover": {
            boxShadow: 4,
            transform: "translateY(-2px)",
          },
          transition: "all 0.2s ease-in-out",
          mb: 2,
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, sm: 3 },
                flex: 1,
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Avatar
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: { xs: 60, sm: 80 },
                  bgcolor: "error.main",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  fontWeight: "bold",
                }}
                src={company.logo}
              >
                <Business sx={{ fontSize: { xs: 24, sm: 32 } }} />
              </Avatar>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {company.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    wordBreak: "break-word",
                  }}
                >
                  {company.tagline}
                </Typography>
              </Box>
            </Box>

            <Chip
              label={`${company.jobListings.toLocaleString()} Job Listings`}
              color="primary"
              variant="filled"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                fontWeight: 600,
                px: { xs: 1, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                minWidth: { xs: "auto", sm: 150 },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
