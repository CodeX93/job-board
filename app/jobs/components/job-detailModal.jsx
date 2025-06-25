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
} from "@mui/material"
import { Close, LocationOn, CalendarToday, AttachMoney, Schedule, CloudQueue } from "@mui/icons-material"

export default function JobDetailsModal({ job, isOpen, onClose, onApply }) {
  if (!job) return null

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" component="span">Job Details</Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Avatar
            sx={{
              bgcolor: "error.main",
              width: 64,
              height: 64,
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {job.company.charAt(0)}
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              {job.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              {job.company}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LocationOn color="action" />
                <Typography variant="body2">{job.location}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AttachMoney color="action" />
                <Typography variant="body2">{job.salary}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Schedule color="action" />
                <Typography variant="body2">{job.type}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <CalendarToday color="action" />
                <Typography variant="body2">Posted {new Date(job.datePosted).toLocaleDateString()}</Typography>
              </Box>
              {job.remote && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <CloudQueue color="action" />
                  <Typography variant="body2">Remote</Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Job Description
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            {job.description}
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Requirements
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {(job.requirements || []).map((req, index) => (
              <Typography component="li" key={index} variant="body1" sx={{ mb: 0.5 }}>
                {req}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Benefits
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {(job.benefits || []).map((benefit, index) => (
              <Typography component="li" key={index} variant="body1" sx={{ mb: 0.5 }}>
                {benefit}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Tags
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {(job.tags || []).map((tag, index) => (
              <Chip key={index} label={tag.label ? tag.label : tag} variant="outlined" />
            ))}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button onClick={() => onApply(job)} variant="contained" size="large">
          Apply Now
        </Button>
      </DialogActions>
    </Dialog>
  )
}
