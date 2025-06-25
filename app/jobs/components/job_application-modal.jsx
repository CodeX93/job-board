"use client"

import { useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  CircularProgress,
} from "@mui/material"
import { Close, CloudUpload } from "@mui/icons-material"

export default function JobApplicationModal({ job, isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    experience: "",
    resume: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!job) return null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    onSubmit(formData, job)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
      experience: "",
      resume: null,
    })
  }

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography variant="h5">Apply for Position</Typography>
          <Typography variant="body2" color="text.secondary">
            {job.title} at {job.company}
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>

      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2, mb: 3 }}>
            <TextField
              label="Full Name"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />
          </Box>

          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Years of Experience</InputLabel>
            <Select
              name="experience"
              value={formData.experience}
              label="Years of Experience"
              onChange={handleInputChange}
            >
              <MenuItem value="0-1">0-1 years</MenuItem>
              <MenuItem value="2-3">2-3 years</MenuItem>
              <MenuItem value="4-5">4-5 years</MenuItem>
              <MenuItem value="6-10">6-10 years</MenuItem>
              <MenuItem value="10+">10+ years</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Resume *
            </Typography>
            <Paper
              sx={{
                border: "2px dashed",
                borderColor: "grey.300",
                p: 3,
                textAlign: "center",
                cursor: "pointer",
                "&:hover": { borderColor: "primary.main" },
              }}
              onClick={() => document.getElementById("resume-upload").click()}
            >
              <CloudUpload sx={{ fontSize: 48, color: "grey.400", mb: 1 }} />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                style={{ display: "none" }}
                id="resume-upload"
              />
              <Typography color="primary" sx={{ cursor: "pointer" }}>
                Click to upload resume
              </Typography>
              <Typography variant="body2" color="text.secondary">
                PDF, DOC, or DOCX (max 5MB)
              </Typography>
              {formData.resume && (
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  Selected: {formData.resume.name}
                </Typography>
              )}
            </Paper>
          </Box>

          <TextField
            label="Cover Letter"
            name="coverLetter"
            multiline
            rows={4}
            value={formData.coverLetter}
            onChange={handleInputChange}
            placeholder="Tell us why you're interested in this position..."
            fullWidth
          />
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}
