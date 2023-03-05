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

      <Grid item xs={12} sm={4} spacing={4}>
          <Link href="/"><Typography variant="body1" mb="8px">Home</Typography></Link>
          <Link href="/about-us"><Typography variant="body1">About Us</Typography></Link>
        </Grid>
        <Grid item xs={12} sm={4} spacing={4}>
          <Link href="/features"><Typography variant="body1" mb="8px">Features</Typography></Link>
          <Link href="/contact"><Typography variant="body1">Contact</Typography></Link>
        </Grid>
      <Typography
        pt={5}
        variant="body1">
        © 2023 Random. All Rights Reserved.
      </Typography>
    </Grid>
  );
}
