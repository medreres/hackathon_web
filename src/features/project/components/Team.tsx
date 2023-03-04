import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

interface ITeam {
  members: any[];
}
export default function Team({ members }: ITeam) {
  const arr = [1, 2, 3];
  const status = "OPEN";
  return (
    <Stack
      alignItems={"flex-start"}
      gap={1}>
      <Typography
        variant="caption"
        sx={{
          textTransform: "uppercase",
          fontSize: 15,
          color: "#8B949E",
        }}
        fontWeight={300}>
        Team
      </Typography>
      <Box display={"flex"}>
        {arr.map((member, index) => (
          <img
            key={index}
            height={40}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            style={{
              transform: `translate(${-40 * index}%)`,
              zIndex: index,
              borderRadius: "100%",
            }}
          />
        ))}
      </Box>
    </Stack>
  );
}
