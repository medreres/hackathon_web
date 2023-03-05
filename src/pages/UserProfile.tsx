import { Avatar, Box, Button, ButtonGroup, FormControl, Grid, Grow, Icon, IconButton, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material'
import Image from 'mui-image'
import React, { useState } from 'react'
import { Telegram, LinkedIn, GitHub } from '@mui/icons-material';
import { Add as AddIcon } from '@mui/icons-material';
import ProjectCard from '../components/ProjectCard';
import SelectForm from '../components/SelectForm';

const Profile = () => {
  const skills = ["React", "TypeScript", "Node.js", "Express.js"];

  const links = [
    {
      name: "Telegram",
      url: "https://t.me/username",
      icon: <Telegram />,
    },
    {
      name: "GitHub",
      url: "https://github.com/username",
      icon: <GitHub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/username",
      icon: <LinkedIn />,
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "Description of Project 1",
      status: "In Progress",
      image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg"
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of Project 2",
      status: "Completed",
      image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg"
    },
    {
      id: 3,
      name: "Project 1",
      description: "Description of Project 1",
      status: "In Progress",
      image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg"
    },
    {
      id: 4,
      name: "Project 2",
      description: "Description of Project 2",
      status: "Completed",
      image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg"
    },
    {
      id: 5,
      name: "Project 1",
      description: "Description of Project 1",
      status: "In Progress",
      image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg"
    },
  ];

  return (
    <Grid container py="72px" px={{ xs: "36px", sm: "48px", md: "96px" }}>
      <Grid item xs={12} md={4} direction="column" >
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" mb="48px">
          <Avatar
            alt="User Name"
            src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg"
            sx={{ width: 150, height: 150, borderRadius: "50%", mb: "20px"}}

          />
          <Typography 
          sx={{
            fontWeight: "700",
            fontSize: "32px",
            color: "#2144F5",
          }}>
            Name Surname
          </Typography>
          <Typography
          sx={{
            fontWeight: "500",
            fontSize: "16px",
          }}>
            Frontend Engineer
          </Typography>
        </Box>
        <Box textAlign="left" mb="48px">
          <Typography
            sx={{
              color: "#2144F5",
              fontWeight: "500",
              fontSize: "16px",
              textTransform: "uppercase",
              mb: "1.5rem"
            }}
          >
            Skills
          </Typography>
          <Box display="flex" justifyContent="start" gap="1rem" flexWrap="wrap">
            {skills.map((skill) => (
              <Button key={skill} variant="outlined" sx={{
                padding: "8px 16px",
                border: "1px solid",
                borderRadius: "25px",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "lowercase",
                color: "#0A0908",
                ':hover': {
                  borderColor: '#000', 
                  backgroundColor: '#9498AD'
                },
              }}>
                #{skill}
              </Button>
            ))}
          </Box>
        </Box>
        <Box textAlign="left" mb="48px">
        <Typography
            sx={{
              color: "#2144F5",
              fontWeight: "500",
              fontSize: "16px",
              textTransform: "uppercase",
              mb: "1.5rem"
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Dictumst viverra tempus dui scelerisque posuere sagittis non. Pharetra velit viverra ullamcorper sed enim pellentesque lectus leo posuere. Sagittis etiam non a sollicitudin posuere integer aenean commodo. Posuere posuere convallis at lacinia.
          </Typography>
        </Box>
        <Box textAlign="left" mb="48px">
        <Typography
            sx={{
              color: "#2144F5",
              fontWeight: "500",
              fontSize: "16px",
              textTransform: "uppercase",
              mb: "1.5rem"
            }}
          >
            Social media
          </Typography>
          <Box display="flex" justifyContent="start" gap="1.5rem" flexWrap="wrap">
            {links.map((link, index) => (
              <IconButton key={index} href={link.url} target="_blank" sx={{width: "20px", heigth: "20px", color: "#0A0908" }}>
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
          <Typography sx={{ pl: {xs: "0", md:"24px"}, fontWeight: "700", fontSize: "32px", color: "#0A0908", mb: "24px", textAlign: "left" }}>Projects</Typography>
            <Box padding="0">
            {projects.map(project => (
              <ProjectCard  
                key={project.id}
                name={project.name}
                description={project.description}
                status={project.status}
                image={project.image}
              />

            ))}
            </Box>
      </Grid>
    </Grid>
  )
}

export default Profile