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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default function RegisterPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 } }}>
          <Grid container spacing={4} sx={{ alignItems: "flex-start" }}>
            {/* Main Form */}
            <Grid item xs={12} md={8}>
              <RegisterForm />
            </Grid>

            {/* Stats Sidebar */}
            <Grid item xs={12} md={4}>
              <Box sx={{ position: { md: "sticky" }, top: { md: 24 } }}>
                <RegisterStatsSidebar />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
