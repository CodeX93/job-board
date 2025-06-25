"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))
  const router = useRouter()

  const navigationItems = ["Jobs", "Jobseekers", "Companies", "Articles", "Salaries", "About"]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMobileNavClick = (item) => {
    router.push(`/${item.toLowerCase()}`)
    setMobileOpen(false)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const drawer = (
    <Box sx={{ width: 280, height: "100%", bgcolor: "white" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              src="/careerdna-logo.png"
              alt="CareerDNA Logo"
              width={160}
              height={44}
              style={{ objectFit: "contain", display: "block" }}
              priority
            />
          </Link>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {navigationItems.map((item) => (
          <ListItem 
            key={item} 
            sx={{ py: 1.5, px: 3, cursor: "pointer" }}
            onClick={() => handleMobileNavClick(item)}
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "#333",
              }}
            />
          </ListItem>
        ))}
        <Box sx={{ px: 3, pt: 3, pb: 2 }}>
          <Link href="/register" passHref>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                borderColor: "#ddd",
                color: "#333",
                textTransform: "none",
                fontWeight: 500,
                py: 1,
                textDecoration: "none",
                "&:hover": {
                  borderColor: "#bbb",
                  bgcolor: "#f5f5f5",
                },
              }}
              onClick={() => setMobileOpen(false)}
            >
              Register
            </Button>
          </Link>
          <Link href="/post-job" passHref>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#333",
                color: "white",
                textTransform: "none",
                fontWeight: 500,
                py: 1,
                textDecoration: "none",
                "&:hover": {
                  bgcolor: "#555",
                },
              }}
              onClick={() => setMobileOpen(false)}
            >
              Post a Job
            </Button>
          </Link>
        </Box>
      </List>
    </Box>
  )

  if (!mounted) return null

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0, sm: 0 }, minHeight: "64px !important" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: isMobile ? 1 : 0 }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Image
                  src="/careerdna-logo.png"
                  alt="CareerDNA Logo"
                  width={220}
                  height={60}
                  style={{ objectFit: "contain", display: "block" }}
                  priority
                />
              </Link>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  justifyContent: "center",
                  mx: 4,
                }}
              >
                {navigationItems.map((item) => (
                  <Link key={item} href={`/${item.toLowerCase()}`} passHref>
                    <Button
                      sx={{
                        color: "#333",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "1rem",
                        mx: 1.5,
                        py: 1,
                        textDecoration: "none",
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "#2196F3",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  </Link>
                ))}
              </Box>
            )}

            {/* Desktop Action Buttons */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Link href="/register" passHref>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#ddd",
                      color: "#333",
                      textTransform: "none",
                      fontWeight: 500,
                      px: 3,
                      py: 1,
                      textDecoration: "none",
                      "&:hover": {
                        borderColor: "#bbb",
                        bgcolor: "#f5f5f5",
                      },
                    }}
                  >
                    Register
                  </Button>
                </Link>
                <Link href="/post-job" passHref>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#333",
                      color: "white",
                      textTransform: "none",
                      fontWeight: 500,
                      px: 3,
                      py: 1,
                      textDecoration: "none",
                      "&:hover": {
                        bgcolor: "#555",
                      },
                    }}
                  >
                    Post a Job
                  </Button>
                </Link>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: "#333" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar