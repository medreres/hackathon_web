import React from "react";
import { Typography, Button, Grid, Link, ButtonGroup, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={6}
      justifyContent="space-between"
      alignItems="center"
      py={{xs:"64px", md: "96px"}}
      px={{xs:"24px", md: "96px"}}
    >
      <Grid
        item
        sm={12}
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        color="secondary"
        sx={{
          pb: { xs: "64px", md: "none" },
          alignItems: "center",
          textAlign: "center" 
        }}
        >
        <Typography
          variant="h2"
          color="#171627"
          sx={{
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "64px",
            mb: "32px",
          }}>
          Suspendisse vitae pharetra netus
        </Typography>
        <Typography
          color="#44444E"
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: "500",
            mb: "32px",
          }}>
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
        </Typography>
        <Box gap="24px">
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            sx={{
              fontSize: "24px",
              lineHeight: "1.5",
              padding: "14px 20px",
              gap: "10px",
              color: 'white',
              borderRadius: "6px",
              textTransform: "none",
              textAlign: "center",
              backgroundColor: "#003AFA",
              border: "2px solid #003AFA",
              ':hover': {
                bgcolor: '#fff', 
                color: '#003AFA',

              },
              mr: "16px"
            }}>
            Primary button
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outlined"
            sx={{
              fontSize: "24px",
              lineHeight: "1.5",
              padding: "14px 20px",
              gap: "10px",
              color: '#003AFA',
              borderRadius: "6px",
              textTransform: "none",
              textAlign: "center",
              backgroundColor: "#fff",
              border: "2px solid #fff",
              ':hover': {
                bgcolor: '#003AFA', 
                color: 'white',
                border: "2px solid #003AFA",
              },
            }}>
            Tertiary button
        </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
