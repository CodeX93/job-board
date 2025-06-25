"use client"

import { Container, Box } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import JobPostForm from "./components/job-post-form"
import JobPostPricingSidebar from "./components/job-post-pricing-sidebar"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default function PostJobPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 } }}>
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
              alignItems: 'flex-start'
            }}
          >
            {/* Main Form - 60% width */}
            <Box sx={{ 
              width: { xs: '100%', sm: '60%' },
              flexShrink: 0
            }}>
              <JobPostForm />
            </Box>

            {/* Pricing Sidebar - 40% width */}
            <Box sx={{ 
              width: { xs: '100%', sm: '40%' },
              position: { sm: "sticky" }, 
              top: { sm: 24 },
              flexShrink: 0
            }}>
              <JobPostPricingSidebar />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}