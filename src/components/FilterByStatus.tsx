import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react'

const statusOptions = [
  { value: 'all', label: 'All' },
  { value: 'open', label: 'Open' },
  { value: 'in progress', label: 'In Progress' },
  { value: 'finished', label: 'Finished' },
];

const FilterByStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  return (
    <Autocomplete
      options={statusOptions}
      multiple={false}
      getOptionLabel={(option) => option.label}
      value={selectedStatus}
      onChange={(event, newValue: any) => {
        setSelectedStatus(newValue);
      }}
      renderInput={(params) => 
        <TextField {...params} label="Filter by status" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '36px', }, borderRadius: '36px', minWidth: 190, border: "1px solid #000000", color: "#000" }} 
        />}
    />
  )
}

export default FilterByStatus