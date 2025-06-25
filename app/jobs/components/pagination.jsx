"use client"

import { Box, Pagination as MuiPagination } from "@mui/material"

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </Box>
  )
}
