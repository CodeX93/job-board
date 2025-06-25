"use client"

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
  IconButton,
  Divider,
  Grid,
} from "@mui/material"
import { Close, Business, LocationOn, CalendarToday, People, Work } from "@mui/icons-material"

export default function CompanyDetailsModal({ company, isOpen, onClose }) {
  if (!company) return null

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h5">Company Details</Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", gap: 3, mb: 4, flexDirection: { xs: "column", sm: "row" } }}>
          <Avatar
            sx={{
              bgcolor: "error.main",
              width: { xs: 80, sm: 100 },
              height: { xs: 80, sm: 100 },
              fontSize: "1.5rem",
              fontWeight: "bold",
              alignSelf: { xs: "center", sm: "flex-start" },
            }}
            src={company.logo}
          >
            <Business sx={{ fontSize: 40 }} />
          </Avatar>

          <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              {company.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              {company.tagline}
            </Typography>

            <Chip
              label={`${company.jobListings.toLocaleString()} Job Listings`}
              color="primary"
              size="large"
              sx={{ fontWeight: 600 }}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Business color="action" />
              <Typography variant="body1">
                <strong>Industry:</strong> {company.industry}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <LocationOn color="action" />
              <Typography variant="body1">
                <strong>Location:</strong> {company.location}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <CalendarToday color="action" />
              <Typography variant="body1">
                <strong>Founded:</strong> {company.founded}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <People color="action" />
              <Typography variant="body1">
                <strong>Employees:</strong> {company.employees}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <Work color="action" />
            About the Company
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            {company.about || company.description}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button variant="contained" size="large">
          View Jobs
        </Button>
      </DialogActions>
    </Dialog>
  )
}
