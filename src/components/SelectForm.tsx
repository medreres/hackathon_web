import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectForm = () => {
  return (
    <FormControl variant="outlined" sx={{ color: "#000", minWidth: 190, border: "1px solid #000000", borderRadius: '36px'}}>
      <InputLabel id="status">Filter by Status</InputLabel>
      <Select labelId="status-filter-label" sx={{ color: "#000", minWidth: 190, border: "none", padding: 1 }}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="in-progress">In Progress</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="cancelled">Cancelled</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectForm