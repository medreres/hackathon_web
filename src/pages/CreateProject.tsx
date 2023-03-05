import { Autocomplete, Box, Button, Container, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { WithContext as ReactTags } from 'react-tag-input';


const CreateProject = () => {
  const [file, setFile] = useState(null);
  const [hashtags, setHashtags] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleHashtagsChange = (e: any) => {
    setHashtags(e.target.value);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add logic here to send data to backend
  };

  const options = [
    { value: '1', label: 'Tag 1' },
    { value: '2', label: 'Tag 2' },
    { value: '3', label: 'Tag 3' },
    { value: '4', label: 'Tag 4' },
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (event, values) => {
    setSelectedTags(values);
  };

  const handleSaveChanges = () => {
    const requestBody = {
      tags: selectedTags.map(tag => tag.value),
    };
    // send the requestBody to the backend
    console.log(requestBody);
  };

  return (
    <Box px={{ xs: "36px", sm: "48px", md: "96px" }}>
      <Typography sx={{ pl: {xs: "0", md:"24px"}, fontWeight: "700", fontSize: "32px", color: "#0A0908", mb: "24px", textAlign: "left" }}>Create a New Project</Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <Box sx={{
        width: "100%",
        bgcolor: "#2144F5",
        height: "250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: "48px"

      }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="file-input"
        />
        <label htmlFor="file-input">
          <Button variant="contained" component="span" sx={{ color: 'inherit', backgroundColor: 'transparent', boxShadow: 'none', '&:hover': { backgroundColor: 'transparent'}, '&:active': { backgroundColor: 'transparent' } }}>
            <AddPhotoAlternateIcon sx={{color: "#fff", height: "36px", width: "auto"}}/>
          </Button>
        </label>
      </Box>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.label}
        onChange={handleTagSelection}
        sx={{width: "50%"}}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            // label="#add needed skills"
            placeholder="#add needed skills"
            sx={{ mb: "24px", borderRadius: "2px" }}
          />
        )}
      />   
      <TextField
        placeholder="Add Title"
        variant="outlined"
        fullWidth
        value={name}
        onChange={handleNameChange}
        sx={{ mb: "24px", color: "#2144F5" }}
        
      />
      <TextField
        placeholder="Add project description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={handleDescriptionChange}
        sx={{ mb: "24px" }}
      />
      <Button variant="outlined" onClick={handleSubmit} 
      sx={{
        fontSize: "24px",
        lineHeight: "1.5",
        padding: "14px 20px",
        color: '#0A0908',
        borderRadius: "36px",
        textTransform: "capitalize",
        textAlign: "center",
        backgroundColor: "#fff",
        border: "1px solid #0A0908",
        width: "250px",
        ':hover': {
          bgcolor: '#2144F5', 
          color: 'white',
          border: "1px solid #2144F5",
        },
      }}>
        Save Changes
      </Button>
    </Box>
  </Box>
  )
}

export default CreateProject