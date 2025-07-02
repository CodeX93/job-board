"use client"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import HeroSection from "./herosection"
import JobListings from "./joblisting"
import SkillsSection from "./demand-skill"
import TopCompanies from "./top_companies.jsx"
import CTASection from "./CTA"
import Box from "@mui/material/Box"

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
    fontFamily: '"Geist", "Roboto", "Arial", sans-serif',
  },
})

export default function HomeClientPage({ jobsData, companiesData, skillsData }) {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Dotted grid background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          background: `
            repeating-radial-gradient(circle, #b0b3b8 0, #b0b3b8 10px, transparent 12px, transparent 60px)
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <div>
            <HeroSection />
            <JobListings initialData={jobsData} />
            <SkillsSection initialData={skillsData} />
            <TopCompanies initialData={companiesData} />
            <CTASection />
          </div>
        </Box>
      </ThemeProvider>
    </Box>
  )
} 