import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Request from "../features/auth/project/components/Request";
import Team from "../features/auth/project/components/Team";
import useProject from "../features/project/hooks/useProject";

export default function Project() {
  const { projectId } = useParams();
  const [project, isPending] = useProject(projectId as string);
  console.log(project);
  const test = [1, 2, 3
  ];
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
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt="placeholder"
      />
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center">
        <Stack
          gap={1}
          direction={"row"}>
          <Chip
            sx={{
              color: "#8B949E",
            }}
            label="#tag"
            variant="outlined"
          />
          <Chip
            sx={{
              color: "#8B949E",
            }}
            label="#tag"
            variant="outlined"
          />
        </Stack>
        <Button
          variant="contained"
          sx={{
            color: "#8B949E",
            backgroundColor: "#D9D9D9",
            borderRadius: 5,
            textTransform: "lowercase",
          }}>
          open
        </Button>
      </Box>
      <Stack
        alignItems={"flex-start"}
        gap={2}
        marginBottom={2}>
        <Typography variant="h1">Project Name</Typography>
        <Typography
          variant="body1"
          textAlign={"start"}>
          Lorem ipsum dolor sit amet consectetur. At viverra mattis dui nascetur. Neque massa scelerisque euismod
          pulvinar erat duis non leo et. Bibendum non sagittis laoreet vitae integer quis eu convallis. Sapien rhoncus
          fringilla pulvinar consectetur.
        </Typography>
        <Team members={[]} />
        <Button
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
      </Stack>
      <Divider />
      <Stack gap={2}>
        {test.map((member, index) => (
          <Request key={index} />
        ))}
      </Stack>
    </Grid>
  );
}
