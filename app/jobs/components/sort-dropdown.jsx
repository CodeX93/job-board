"use client"

import { useState } from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export default function SortDropdown({ onSort }) {
  const [selectedSort, setSelectedSort] = useState("newest")

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "salary-high", label: "Salary: High to Low" },
    { value: "salary-low", label: "Salary: Low to High" },
    { value: "relevance", label: "Most Relevant" },
  ]

  const handleSort = (event) => {
    const sortValue = event.target.value
    setSelectedSort(sortValue)
    onSort(sortValue)
  }

  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Sort by</InputLabel>
      <Select value={selectedSort} label="Sort by" onChange={handleSort}>
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
