"use client"

import { useState } from "react"
import { Box, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Chip } from "@mui/material"
import { Search, FilterList } from "@mui/icons-material"

export default function CompaniesSearch({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  const industries = [
    "All Industries",
    "Technology",
    "Aviation",
    "E-commerce & Cloud",
    "Automotive & Energy",
    "Social Media & VR",
    "Entertainment",
    "Music Streaming",
    "Cloud Software",
    "Software",
    "Transportation",
  ]

  const locations = [
    "All Locations",
    "Dubai, UAE",
    "Redmond, USA",
    "Mountain View, USA",
    "Seattle, USA",
    "Cupertino, USA",
    "Austin, USA",
    "Menlo Park, USA",
    "Los Gatos, USA",
    "Stockholm, Sweden",
    "San Francisco, USA",
    "San Jose, USA",
  ]

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch && onSearch(value)
  }

  const handleIndustryChange = (e) => {
    const value = e.target.value
    setSelectedIndustry(value)
    onFilter && onFilter({ industry: value === "All Industries" ? "" : value, location: selectedLocation })
  }

  const handleLocationChange = (e) => {
    const value = e.target.value
    setSelectedLocation(value)
    onFilter && onFilter({ industry: selectedIndustry, location: value === "All Locations" ? "" : value })
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedIndustry("")
    setSelectedLocation("")
    onSearch && onSearch("")
    onFilter && onFilter({ industry: "", location: "" })
  }

  const hasActiveFilters = searchTerm || selectedIndustry || selectedLocation

  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search companies by name or industry..."
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

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          mb: 2,
        }}
      >
        <FormControl sx={{ minWidth: { xs: "100%", sm: 200 } }}>
          <InputLabel>Industry</InputLabel>
          <Select value={selectedIndustry} label="Industry" onChange={handleIndustryChange}>
            {industries.map((industry) => (
              <MenuItem key={industry} value={industry}>
                {industry}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: { xs: "100%", sm: 200 } }}>
          <InputLabel>Location</InputLabel>
          <Select value={selectedLocation} label="Location" onChange={handleLocationChange}>
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {hasActiveFilters && (
          <Chip
            label="Clear Filters"
            onClick={clearFilters}
            onDelete={clearFilters}
            color="primary"
            variant="outlined"
            icon={<FilterList />}
            sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}
          />
        )}
      </Box>
    </Box>
  )
}
