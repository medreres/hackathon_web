import { Grid, Link, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <Grid
      container
      px={{ xs: "36px", sm: "48px", md: "96px" }}
      py={{ xs: "48px" }}
      display="flex"
      flex="1"
      justifyContent="space-between"
      // sx={{
      //   backgroundColor: "rgba(0, 58, 250, 0.1)",
      // }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        display="flex"
        pb={{ xs: "24px", sm: "0" }}>
        <Typography
          variant="h2"
          color="primary_secondary">
            <img src={logo} alt="Logo" style={{ width: "110px", height: "24px", marginRight: "10px" }} />
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={4}
        spacing={1}>
        <Link href="/">
          <Typography variant="body1">Home</Typography>
        </Link>
        <Link href="/about-us">
          <Typography variant="body1">About Us</Typography>
        </Link>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={4}
        spacing={1}>
        <Link href="/features">
          <Typography variant="body1">Features</Typography>
        </Link>
        <Link href="/contact">
          <Typography variant="body1">Contact</Typography>
        </Link>
      </Grid>
      <Typography
        pt={5}
        variant="body1">
        © 2023 Random. All Rights Reserved.
      </Typography>
    </Grid>
  );
}
