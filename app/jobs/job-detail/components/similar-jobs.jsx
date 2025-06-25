"use client"

import { Box, Typography, Card, CardContent, Avatar, Chip, Button } from "@mui/material"

export default function SimilarJobs({ jobs }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Jobs in Dubai
        </Typography>
        <Button variant="text" color="primary">
          View all
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {jobs.map((job) => (
          <Card key={job.id} sx={{ "&:hover": { boxShadow: 4 } }}>
            <CardContent sx={{ p: 2 }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: "error.main",
                    width: 40,
                    height: 40,
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  E
                </Avatar>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {job.company} • {job.location}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    <Chip label={job.category} size="small" color="primary" variant="outlined" />
                    <Chip label={job.salary} size="small" color="success" variant="outlined" />
                    {job.tags.slice(0, 3).map((tag, index) => (
                      <Chip key={index} label={tag.label ? tag.label : tag} size="small" variant="outlined" />
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
