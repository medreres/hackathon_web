import { Autocomplete, Box, Button, Container, Input, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { WithContext as ReactTags } from "react-tag-input";
import { useNavigate } from "react-router-dom";
import { createProject, fetchAvailableTags } from "../api";
import { ITag } from "../api/fetchAvailableTags";
import { ICreateProject } from "../api/projects/createProject";

const CreateProject = () => {
  const [file, setFile] = useState(null);
  const [hashtags, setHashtags] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

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
    const params: ICreateProject = {
      description,
      title: name,
      tags: [hashtags],
    };
    createProject(params).then((id) => {
      console.log(id);
      // TODO change on deploy
      // console.log(url);
      navigate(`/projects/${id}`);
    });
  };

  // TODO available tags
  const [tags, setTags] = useState<ITag[]>([]);
  useEffect(() => {
    fetchAvailableTags().then((tags) => setTags(tags));
  }, []);
  // console.log(tags);
  // const options = [
  //   { value: "1", label: "Tag 1" },
  //   { value: "2", label: "Tag 2" },
  //   { value: "3", label: "Tag 3" },
  //   { value: "4", label: "Tag 4" },
  // ];

  const [selectedTags, setSelectedTags] = useState<any[]>([]);

  const handleTagSelection = (event: any, values: any) => {
    console.log(values);
    setSelectedTags(values);
  };

  const handleSaveChanges = () => {
    const requestBody = {
      tags: selectedTags.map((tag) => tag.value),
    };
    // send the requestBody to the backend
    // console.log(requestBody);
  };

  return (
    <Box px={{ xs: "36px", sm: "48px", md: "96px" }}>
      <Typography
        sx={{
          pl: { xs: "0", md: "24px" },
          fontWeight: "700",
          fontSize: "32px",
          color: "#0A0908",
          mb: "24px",
          textAlign: "left",
        }}>
        Create a New Project
      </Typography>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}>
        <Box
          sx={{
            width: "100%",
            bgcolor: "#2144F5",
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "48px",
          }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="file-input"
          />
          <label htmlFor="file-input">
            <Button
              variant="contained"
              component="span"
              sx={{
                color: "inherit",
                backgroundColor: "transparent",
                boxShadow: "none",
                "&:hover": { backgroundColor: "transparent" },
                "&:active": { backgroundColor: "transparent" },
              }}>
              <AddPhotoAlternateIcon sx={{ color: "#fff", height: "36px", width: "auto" }} />
            </Button>
          </label>
        </Box>
        <TextField
          label="Hashtags"
          placeholder="#add needed skills"
          variant="outlined"
          value={hashtags}
          onChange={handleHashtagsChange}
          sx={{ mb: "24px", borderRadius: "2px", width: "50%" }}
        />
        <TextField
          label="Project Name"
          placeholder="Enter project name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={handleNameChange}
          sx={{ mb: "24px", color: "#2144F5" }}
        />
        <TextField
          label="Project Description"
          placeholder="Enter project description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
          sx={{ mb: 2 }}
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          sx={{
            fontSize: "24px",
            lineHeight: "1.5",
            padding: "14px 20px",
            color: "#0A0908",
            borderRadius: "36px",
            textTransform: "capitalize",
            textAlign: "center",
            backgroundColor: "#fff",
            border: "1px solid #0A0908",
            width: "250px",
            ":hover": {
              bgcolor: "#2144F5",
              color: "white",
              border: "1px solid #2144F5",
            },
          }}>
          Save Changes
        </Button>
      </Box> */}
      <Autocomplete
        multiple
        id="tags-outlined"
        options={tags.map((tag) => tag.title)}
        getOptionLabel={(option) => option}
        onChange={handleTagSelection}
        sx={{ width: "50%" }}
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
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{
          fontSize: "16px",
          lineHeight: "1.5",
          fontWeight: 600,
          padding: "14px 20px",
          color: "#0A0908",
          borderRadius: "36px",
          textTransform: "capitalize",
          textAlign: "center",
          backgroundColor: "#fff",
          border: "1px solid #0A0908",
          width: "250px",
          ":hover": {
            bgcolor: "#2144F5",
            color: "white",
            border: "1px solid #2144F5",
          },
        }}>
        Save Changes
      </Button>
    </Box>
  );
};

export default CreateProject;
