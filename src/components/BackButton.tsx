import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <IconButton
      onClick={clickHandler}
      color="secondary"
      aria-label="previous page"
      component="label">
      <ArrowBackIcon
        fontSize="large"
        sx={{
          color: "#000",
        }}
      />
    </IconButton>
  );
}
