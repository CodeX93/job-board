"use client"

import { useState } from "react"
import { TextField, InputAdornment } from "@mui/material"
import { Search } from "@mui/icons-material"

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search jobs by title, company, or keywords..."
      value={searchTerm}
      onChange={handleSearch}
      sx={{ mb: 3 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search color="action" />
          </InputAdornment>
        ),
      }}
    />
  )
}
