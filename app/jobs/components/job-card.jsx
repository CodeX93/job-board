"use client"

import { Card, CardContent, Box, Typography, Chip, Avatar } from "@mui/material"
import { CalendarToday, CloudQueue } from "@mui/icons-material"
import { styled } from '@mui/material/styles'

const FeaturedCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(90deg, #1976d2 0%, #1565c0 100%)',
  color: '#fff',
  borderRadius: 12,
  boxShadow: theme.shadows[4],
  marginBottom: 12,
  '& .MuiTypography-h6': {
    color: '#fff',
    fontWeight: 700,
    fontSize: 20,
  },
  '& .MuiChip-root': {
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    border: 0,
    fontWeight: 500,
  },
}))

const NormalCard = styled(Card)(({ theme }) => ({
  background: '#fff',
  borderRadius: 12,
  border: '1px solid #e0e0e0',
  boxShadow: 'none',
  marginBottom: 12,
  transition: 'box-shadow 0.2s, transform 0.2s',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)',
  },
  '& .MuiTypography-h6': {
    color: '#222',
    fontWeight: 700,
    fontSize: 20,
  },
  '& .MuiChip-root': {
    background: '#f5faff',
    color: '#1976d2',
    border: '1px solid #e3eafc',
    fontWeight: 500,
  },
}))

export default function JobCard({ job, onClick }) {
  const isFeatured = job.featured
  const CardComponent = isFeatured ? FeaturedCard : NormalCard
  const chips = job.tags.slice(0, 6)
  const extraCount = job.tags.length - 6

  return (
    <CardComponent onClick={() => onClick(job)} sx={{ cursor: 'pointer', p: 0 }}>
      <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', p: 2.5 }}>
        <Avatar
          src={job.logo ? `/logos/${job.logo}.png` : undefined}
          sx={{ bgcolor: isFeatured ? '#fff' : 'error.main', color: isFeatured ? '#1976d2' : '#fff', width: 48, height: 48, fontWeight: 700, fontSize: 22 }}
        >
          {job.company.charAt(0)}
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>{job.title}</Typography>
          <Typography variant="subtitle2" sx={{ mb: 1, color: isFeatured ? '#fff' : '#222', fontWeight: 500 }}>
            {job.company} <span style={{ color: '#90caf9', fontWeight: 400 }}>&nbsp;{job.location}</span>
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {chips.map((tag, idx) => (
              <Chip key={idx} label={tag.label} size="small" variant="outlined" />
            ))}
            {extraCount > 0 && (
              <Chip label={`+${extraCount} more`} size="small" variant="outlined" />
            )}
          </Box>
        </Box>
      </CardContent>
    </CardComponent>
  )
}
