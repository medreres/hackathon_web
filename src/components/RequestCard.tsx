import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import approved from "../assets/approved.png";
import pending from "../assets/pending.png";
import rejected from "../assets/rejected.png";
import { Link } from "react-router-dom";

interface RequestCardProps {
  name: string;
  status: string;
  description: string;
  id: string;
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
        textDecoration: "none",
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
          <Typography sx={{ mb: 1, fontWeight: "500", fontSize: "16px", color: "#9498AD" }}>{description}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default RequestCard;
