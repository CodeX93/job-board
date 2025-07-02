"use client"

import { Container, Grid, Box } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import RegisterForm from "./components/register-form"
import RegisterStatsSidebar from "./components/register-stats-sidebar"

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
    fontFamily: '"Geist", "Roboto", "Arial", sans-serif',
  },
})

export default function RegisterPage() {
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
              alignItems: 'flex-start',
            }}
          >
            {/* Main Form - 68% width */}
            <Box sx={{
              width: { xs: '100%', sm: '68%' },
              flexShrink: 0,
            }}>
              <RegisterForm />
            </Box>

            {/* Stats Sidebar - 32% width */}
            <Box sx={{
              width: { xs: '100%', sm: '32%' },
              position: { sm: 'sticky' },
              top: { sm: 32 },
              flexShrink: 0,
              zIndex: 2,
            }}>
              <RegisterStatsSidebar />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
