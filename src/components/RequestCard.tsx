import { Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";
import approved from "../assets/approved.png"
import pending from "../assets/pending.png"
import rejected from "../assets/rejected.png"

interface RequestCardProps {
  name: string;
  status: string;
  description: string;
  id: string;
  feedback: string | null;
}

const RequestCard = ({ name, status, description, id }: RequestCardProps) => {
  let statusIcon;

  switch (status) {
    case "PENDING":
      statusIcon = pending;
      break;
    case "ACCEPTED":
      statusIcon = approved;
      break;
    case "REJECTED":
      statusIcon = rejected;
      break;
  }

  return (
    <Card
      component={Link}
      to={`/projects/${id}`}
      sx={{
        display: "flex",
        width: "100%",
        flexGrow: 1,
        alignItems: "center",
        px: { xs: "0", md: "24px" },
        py: "24px",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
      elevation={0}>
      <CardMedia>
        {statusIcon && (
          <img
            src={statusIcon}
            alt={status}
            width="60px"
            height="60px"
          />
        )}
      </CardMedia>
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column", alignItems: "start" }}>
        <CardContent sx={{ flexGrow: 1, textAlign: "left", ml: { xs: "0", sm: "36px" } }}>
          <Typography
            component="h2"
            sx={{ fontWeight: "700", fontSize: "24px", mb: 0.5, color: "#2144F5" }}>
            {name}
          </Typography>
          <Typography sx={{ mb: 1, fontWeight: "500", fontSize: "16px", color: "#9498AD" }}>
            {description}
          </Typography>
          {status === 'Rejected' && feedback && (
            <Button
              variant="outlined"
              onClick={handleClickOpen} 
              sx={{
                fontSize: "16px",
                lineHeight: "1.5",
                fontWeight: 600,
                padding: "8px 2px",
                color: "#0A0908",
                mt: "16px",
                borderRadius: "36px",
                textTransform: "capitalize",
                textAlign: "center",
                backgroundColor: "#fff",
                border: "1px solid #0A0908",
                width: "250px",
                ":hover": {
                  // bgcolor: "#2144F5",
                  // color: "white",
                  border: "1px solid #0A0908",
                },
              }}>
              View Feedback
            </Button>          
          )}

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Feedback </DialogTitle>
        <DialogContent>
          <DialogContentText>{feedback}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{color: 
"#2144F5"}}>
            ok
          </Button>
        </DialogActions>
      </Dialog>
        
        </CardContent>
      </Box>
    </Card>
  );
};

export default RequestCard;
