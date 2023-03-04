import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ContactBanner() {
  return (
    <Grid container
      display="flex"
      justifyContent={{xs: "center", md: "space-between"}}
      alignItems="center"
      px={{xs: "36px", sm: "48px",  md: "96px" }}
      py={{ xs: 10, md: 15}}
      mb={{xs:"64px", md: "96px"}}
      style={{

        border: "1px solid"
        // backgroundColor: "#003AFA", 
      }}
      >
      <Grid item xs={12} md={6} pb={{xs: "48px", md: "0"}}>
      <Typography
          variant="h2" 
          fontSize={{xs: "24px"}}
        >
        Any questions? Contact us
      </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Link href="mailto:logo@gmail.com">
          <Typography
            variant="h2"
            fontSize={{xs: "24px"}}
            sx={{
              ':hover': {
                color: '#003AFA', 
              },
            }}
          >
              logo@gmail.com
          </Typography>
        </Link>
      </Grid>
    
    </Grid>
  );
}
