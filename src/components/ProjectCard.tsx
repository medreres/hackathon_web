import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import users from "../assets/users.png"

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  status: string;
}

const ProjectCard = ({ image, name, description, status }: ProjectCardProps ) => {
  const getStatusColor = () => {
    switch (status) {
      case 'In Progress':
        return '#ff9800';
      case 'Completed':
        return '#4caf50';
      default:
        return '#f44336';
    }
  };

  return (
    <Card sx={{ display: 'flex', width: "100%", px: {xs: "0", md: "24px"}, py: "24px", flexDirection: {xs: "column", sm: "row"}}} elevation={0}>
      <img src={image} alt={name} style={{ minWidth: "190px" }} />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: "start" }}>
        <CardContent sx={{ flexGrow: 1, minWidth: "100%", textAlign: "left", ml: {xs: "0", sm: "36px"} }}>
          <Typography component="h2" sx={{ fontWeight: "700", fontSize: "24px", mb: 0.5, color: "#2144F5" }}>
            {name}
          </Typography>
          <Typography sx={{ mb: 1, fontWeight: "500", fontSize: "16px", color: "#9498AD" }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", flexGrow: 1, }}>
            <Box>
              <img src={users} alt="users" height="30px" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: getStatusColor(),
                  marginRight: 8,
                }}
              />
              <Typography
                sx={{fontWeight: "500", fontSize: "14px", ml: {xs: "6px", md: "14px"}}}
              >{status}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProjectCard;