import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
// import React from "react";
import { IRequest } from "../../../../api/projects/fetchRequests";
import { acceptRequest, rejectRequest } from "../../../../api";

interface RequestInterface {
  data: IRequest;
  remove: (id: string) => void;
}
export default function Request({ data, remove }: RequestInterface) {
  const handleAccept = () => {
    acceptRequest(data.id).then(() => {
      remove(data.id);
    });
  };

  const removeHandler = () => {
    // TODO reason modal
    rejectRequest(data.id, "test").then(() => {
      remove(data.id);
    });
  };

  // console.log(first)

  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      direction="row">
      <Stack
        alignItems={"center"}
        direction={"row"}
        gap={2}>
        <img
          height={50}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          style={{
            borderRadius: "100%",
          }}
        />
        <Stack alignItems={"center"}>
          <Typography variant="caption">{data.username}</Typography>
          <Stack
            direction="row"
            gap={1}>
            {data.skills.map((tag) => (
              <Typography
                key={tag}
                variant="body1">
                #{tag}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap={1}
        alignItems={"center"}>
        <Button
          onClick={handleAccept}
          variant="contained"
          sx={{
            color: "#000",
            backgroundColor: "#D9D9D9",
            borderRadius: 5,
            textTransform: "none",
            px: 2,
          }}>
          Accept Request
        </Button>
        <Button
          onClick={removeHandler}
          variant="outlined"
          color="warning"
          sx={{
            color: "#8B949E",
            // backgroundColor: "#D9D9D9",
            borderRadius: 5,
            borderColor: "#D9D9D9",
            textTransform: "none",
            px: 2,
          }}>
          <DeleteOutlineTwoToneIcon fontSize="medium" />
        </Button>
      </Stack>
    </Stack>
  );
}
