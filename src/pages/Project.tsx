import { Box, Button, Chip, CircularProgress, Divider, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { startProject } from "../api";
import BackButton from "../components/BackButton";
import Request from "../features/auth/project/components/Request";
import Team from "../features/auth/project/components/Team";
import useProject from "../features/project/hooks/useProject";
import useRequests from "../features/project/hooks/useRequests";

export default function Project() {
  const { projectId } = useParams();
  const [project, isPendingProject] = useProject(projectId as string);
  // const [requests, isPendingRequests, removeRequest] = useRequests(projectId as string);
  const startProjectHandler = () => {
    startProject(projectId as string).then(() => {});
  };

  // console.log(project)

  const getVariant = (status: string) => {
    switch (status) {
      case "OPEN":
        return "success";
      case "IN_PROGRESS":
        return "warning";
      case "FINISHED":
        return "secondary";
      default:
        throw new Error();
    }
  };

  // console.log(project?.pic);

  // TODO pending page
  if (isPendingProject)
    return (
      <CircularProgress
        // variant="determinate"
        color="secondary"
      />
    );

  return (
    <Grid
      container
      px={{ xs: "36px", sm: "48px", md: "96px" }}
      py={{ xs: "48px" }}
      display="flex"
      flexDirection={"column"}
      flex="1"
      justifyContent="space-between"
      gap={2}
      // sx={{
      //   backgroundColor: "rgba(0, 58, 250, 0.1)",
      // }}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        marginLeft={"-12px"}>
        <BackButton />
      </Box>
      <img
        // width={1072}
        height={250}
        src={project?.pic || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
        alt="placeholder"
      />
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center">
        <Stack
          gap={1}
          direction={"row"}>
          {project?.tags.map((tag) => (
            <Chip
              key={tag}
              sx={{
                color: "#8B949E",
              }}
              label={`#${tag}`}
              variant="outlined"
            />
          ))}
        </Stack>
        <Button
          variant="contained"
          color={getVariant(project!.status)}
          sx={{
            color: "#fff",
            // backgroundColor: "#D9D9D9",
            borderRadius: 5,
            textTransform: "lowercase",
          }}>
          {project?.status}
        </Button>
      </Box>
      <Stack
        alignItems={"flex-start"}
        gap={2}
        marginBottom={2}>
        <Typography variant="h1">{project?.title}</Typography>
        <Typography
          variant="body1"
          textAlign={"start"}>
          {project?.description}
        </Typography>
        <Team members={project!.team} />
        {project?.author && project?.status === "OPEN" && (
          <Button
            onClick={startProjectHandler}
            variant="contained"
            sx={{
              color: "#8B949E",
              backgroundColor: "#D9D9D9",
              borderRadius: 5,
              textTransform: "none",
              px: 5,
            }}>
            Start Project
          </Button>
        )}
      </Stack>
      <Divider />
      {/* // TODO if status OPEN and is author then make additional request to fetch all the requests */}
      {/* {project?.author && project?.status === "OPEN" && !isPendingRequests && (
        <Stack gap={2}>
          {requests?.map((request, index) => (
            <Request
              remove={removeRequest}
              data={request}
              key={index}
            />
          ))}
        </Stack>
      )} */}
    </Grid>
  );
}
