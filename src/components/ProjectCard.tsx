import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import users from "../assets/users.png";
import { Link } from "react-router-dom";
import { getStatus } from "../utils/format";

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  status: string;
  id: string;
}

const ProjectCard = ({ image, name, description, status, id }: ProjectCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "IN_PROGRESS":
        return "#ff9800";
      case "Completed":
        return "#4caf50";
      case "FINISHED":
        return "#f44336";
    }
  };

  return (
    <Card
      component={Link}
      to={`/projects/${id}`}
      variant="outlined"
      sx={{
        display: "flex",
        width: "100%",
        flexGrow: 1,
        px: { xs: "0", md: "24px" },
        py: "24px",
        flexDirection: { xs: "column", sm: "row" },
        textDecoration: "none",
      }}
      elevation={0}>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "start",
          width: { xs: "100%", sm: "190px" },
        }}>
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column", alignItems: "start" }}>
        <CardContent sx={{ flexGrow: 1, width: "100%", textAlign: "left", ml: { xs: "0", sm: "36px" } }}>
          <Typography
            component="h2"
            sx={{ fontWeight: "700", fontSize: "24px", mb: 0.5, color: "#2144F5" }}>
            {name}
          </Typography>
          <Typography sx={{ mb: 1, fontWeight: "500", fontSize: "16px", color: "#9498AD" }}>{description}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexGrow: 1 }}>
            <Box>
              <img
                src={users}
                alt="users"
                height="30px"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: getStatusColor(),
                  marginRight: 8,
                }}
              />
              <Typography sx={{ fontWeight: "500", fontSize: "14px", ml: { xs: "6px", md: "14px" } }}>
                {getStatus(status)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProjectCard;
