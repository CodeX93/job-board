"use client"

import { Box, Paper, Typography } from "@mui/material"
import { AttachMoney, Accessibility, Work } from "@mui/icons-material"

export default function JobInfoCards({ job }) {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
      <Paper sx={{ p: 2, flex: 1, minWidth: 200, bgcolor: "grey.900", color: "white" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <AttachMoney sx={{ fontSize: 20 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Financial
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          {job.financial.salary}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {job.financial.taxInfo}
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, flex: 1, minWidth: 200, bgcolor: "grey.900", color: "white" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Accessibility sx={{ fontSize: 20 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Accessibility
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          {job.accessibility.workType}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          {job.accessibility.visaProvided ? "Visa Provided" : "No Visa"}
        </Typography>
        <Typography variant="body2">
          {job.accessibility.applyFromAbroad ? "Apply from abroad" : "Local only"}
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, flex: 1, minWidth: 200, bgcolor: "grey.900", color: "white" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Work sx={{ fontSize: 20 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Requirements
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          {job.requirements.experience}
        </Typography>
        <Typography variant="body2">{job.requirements.language}</Typography>
      </Paper>
    </Box>
  )
}
