"use client"

import { Card, CardContent, Box, Typography, Chip, Avatar } from "@mui/material"
import { CalendarToday, CloudQueue } from "@mui/icons-material"
import { styled } from '@mui/material/styles'

const geistFont = '"Geist", "Roboto", "Arial", sans-serif';

const FeaturedCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(90deg, #1976d2 0%, #1565c0 100%)',
  color: '#fff',
  borderRadius: 12,
  boxShadow: theme.shadows[4],
  marginBottom: 12,
  fontFamily: geistFont,
  '& .MuiTypography-h6': {
    color: '#fff',
    fontWeight: 700,
    fontSize: 20,
    fontFamily: geistFont,
  },
  '& .MuiChip-root': {
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    border: 0,
    fontWeight: 500,
    fontFamily: geistFont,
    fontSize: '0.78rem',
    height: 26,
    px: 0.5,
    whiteSpace: 'normal',
  },
}))

const NormalCard = styled(Card)(({ theme }) => ({
  background: '#fff',
  borderRadius: 12,
  border: '1px solid #e0e0e0',
  boxShadow: 'none',
  marginBottom: 12,
  transition: 'box-shadow 0.2s, transform 0.2s',
  fontFamily: geistFont,
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)',
  },
  '& .MuiTypography-h6': {
    color: '#222',
    fontWeight: 700,
    fontSize: 20,
    fontFamily: geistFont,
  },
  '& .MuiChip-root': {
    background: '#f5faff',
    color: '#1976d2',
    border: '1px solid #e3eafc',
    fontWeight: 500,
    fontFamily: geistFont,
    fontSize: '0.78rem',
    height: 26,
    px: 0.5,
    whiteSpace: 'normal',
  },
}))

export default function JobCard({ job, onClick }) {
  const isFeatured = job.featured
  const CardComponent = isFeatured ? FeaturedCard : NormalCard
  const chips = job.tags

  return (
    <CardComponent onClick={() => onClick(job)} sx={{ cursor: 'pointer', p: 0 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, p: 2.5 }}>
        {/* First column: Avatar */}
        <Box sx={{ flex: '0 0 56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Avatar
            src={job.logo ? `/logos/${job.logo}.png` : undefined}
            sx={{ bgcolor: isFeatured ? '#fff' : 'error.main', color: isFeatured ? '#1976d2' : '#fff', width: 48, height: 48, fontWeight: 700, fontSize: 22 }}
          >
            {job.company.charAt(0)}
          </Avatar>
        </Box>
        {/* Second column: Job title, company, location */}
        <Box sx={{ flex: 2, minWidth: 0 }}>
          <Typography variant="h6" sx={{ mb: 0.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{job.title}</Typography>
          <Typography variant="body1">
  <Box component="span" fontWeight="bold">
    {job.company}
  </Box>
  <Box component="span" ml={1}>
    {job.location}
  </Box>
</Typography>

       
        </Box>
        {/* Third column: Chips */}
        <Box
  sx={{
    flex: 3,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.5,
    justifyContent: 'flex-start',
    minWidth: 0,
  }}
>
  {chips.map((tag, idx) => (
    <Chip
      key={idx}
      label={tag.label}
      size="small"
      variant="outlined"
      sx={{
        backgroundColor: '#C0DFFF',
        '& .MuiChip-label': {
          color: '#000000',
          fontWeight: 500,
        },
      }}
    />
  ))}
</Box>

      </CardContent>
    </CardComponent>
  )
}
