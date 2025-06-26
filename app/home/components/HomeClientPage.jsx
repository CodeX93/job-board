"use client"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import HeroSection from "./herosection"
import JobListings from "./joblisting"
import SkillsSection from "./demand-skill"
import TopCompanies from "./top_companies.jsx"
import CTASection from "./CTA"

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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default function HomeClientPage({ jobsData, companiesData, skillsData }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <HeroSection />
        <JobListings initialData={jobsData} />
        <SkillsSection initialData={skillsData} />
        <TopCompanies initialData={companiesData} />
        <CTASection />
      </div>
    </ThemeProvider>
  )
} 