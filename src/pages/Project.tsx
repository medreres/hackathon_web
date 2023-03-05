import { Box, Button, Chip, CircularProgress, Divider, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { createRequest, startProject } from "../api";
import BackButton from "../components/BackButton";
import Request from "../features/auth/project/components/Request";
import Team from "../features/auth/project/components/Team";
import useProject from "../features/project/hooks/useProject";
import useRequests from "../features/project/hooks/useRequests";
import LoadingButton from "@mui/lab/LoadingButton";
import CheckIcon from "@mui/icons-material/Check";
import SendIcon from "@mui/icons-material/Send";
import { useAuthContext } from "../features/auth/context/auth-context";
import { getStatus } from "../utils/format";

export default function Project() {
  const { projectId } = useParams();
  const { idToken } = useAuthContext();
  const [project, isPendingProject] = useProject(projectId as string);
  const [requests, isPendingRequests, removeRequest] = useRequests(projectId as string);
  const startProjectHandler = () => {
    startProject(projectId as string).then(() => {});
  };

  const [isRequestPending, setIsRequestPending] = useState(false);
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const sendRequestHadler = () => {
    setIsRequestPending(true);
    createRequest(projectId as string).then(() => {
      setIsRequestPending(false);
      setIsSentSuccessfully(true);
    });
  };

  console.log(project);

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
  if (isPendingProject || isPendingRequests)
    return (
      <CircularProgress
        // variant="determinate"
        color="secondary"
      />
    );

  return (
    <Grid
      container
      py={{ xs: "24px", sm: "36px", xl: "72px" }}
      px={{ xs: "36px", sm: "48px", md: "96px" }}
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
        marginLeft={"-12px"}
        mb="24px"
        >
        <BackButton />
      </Box>
      <Box>
        <img
          width={600}
          // height={300}
          src={project?.pic || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
          alt="placeholder"
        />
      </Box>
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
          {getStatus(project!.status)}
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
          // <Button
          //   onClick={startProjectHandler}
          //   variant="contained"
          //   sx={{
          //     color: "#8B949E",
          //     backgroundColor: "#D9D9D9",
          //     borderRadius: 5,
          //     textTransform: "none",
          //     px: 5,
          //   }}>
          //   Start Project
          // </Button>
          <Button
          variant="outlined"
          onClick={startProjectHandler}
          sx={{
            fontSize: "16px",
            lineHeight: "1.5",
            fontWeight: 600,
            padding: "14px 20px",
            color: "#0A0908",
            borderRadius: "36px",
            textTransform: "capitalize",
            textAlign: "center",
            backgroundColor: "#fff",
            border: "1px solid #0A0908",
            width: "250px",
            ":hover": {
              bgcolor: "#2144F5",
              color: "white",
              border: "1px solid #2144F5",
            },
          }}>
          Start Project
        </Button>
        )}
        {idToken && project!.author === false && project!.status === "OPEN" && (
          <>
            {/* {!isRequestPending && (
              <Button
                onClick={sendRequestHadler}
                variant="contained"
                sx={{
                  color: "#8B949E",
                  backgroundColor: "#D9D9D9",
                  borderRadius: 5,
                  textTransform: "none",
                  px: 5,
                }}>
                Send Request
              </Button>
            )} */}
            {/* {isRequestPending && ( */}
            <LoadingButton
              size="small"
              startIcon={isSentSuccessfully ? "Sent Successfully" : "Send Request"}
              onClick={sendRequestHadler}
              endIcon={isSentSuccessfully ? <CheckIcon /> : <SendIcon />}
              loading={isRequestPending}
              loadingPosition="end"
              variant="contained"
              color={isSentSuccessfully ? "success" : "primary"}
            />
          </>
        )}
      </Stack>
      <Divider />
      {/* // TODO if status OPEN and is author then make additional request to fetch all the requests */}
      {project?.author && project?.status === "OPEN" && !isPendingRequests && (
        <Stack gap={2}>
          {requests?.map((request, index) => (
            <Request
              remove={removeRequest}
              data={request}
              key={index}
            />
          ))}
        </Stack>
      )}
    </Grid>
  );
}
