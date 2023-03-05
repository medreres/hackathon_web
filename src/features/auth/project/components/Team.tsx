import { IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
// import React from "react";
// import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { ITeamMember } from "../../../project/hooks/useProject";
import { useNavigate } from "react-router-dom";

interface ITeam {
  members: ITeamMember[];
}
export default function Team({ members }: ITeam) {
  const arr = [1, 2, 3];
  const status = "OPEN";
  const navigate = useNavigate();
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
        {members.map(({ id, pic }, index) => (
          <IconButton
            key={id}
            onClick={() => navigate(`/users/${id}`)}
            sx={{
              transform: `translate(${-40 * index}%)`,
            }}>
            <img
              height={40}
              src={pic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
              style={{
                zIndex: index,
                borderRadius: "100%",
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Stack>
  );
}
