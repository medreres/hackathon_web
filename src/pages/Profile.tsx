import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  // ButtonGroup,
  // FormControl,
  Grid,
  // Grow,
  // Icon,
  IconButton,
  // InputLabel,
  // MenuItem,
  // Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
// import Image from "mui-image";
import { useEffect, useState } from "react";
import { Telegram, LinkedIn, GitHub } from "@mui/icons-material";
import { Add as AddIcon } from "@mui/icons-material";
import ProjectCard from "../components/ProjectCard";
// import SelectForm from "../components/SelectForm";
import FilterByStatus from "../components/FilterByStatus";
import RequestCard from "../components/RequestCard";
import useProfile from "../hooks/useProfile";
import useRequests from "../hooks/useRequests";
import SelectForm from "../components/SelectForm";
import { useAuthContext } from "../features/auth/context/auth-context";
import { useNavigate } from "react-router-dom";
import useMyProjects from "../hooks/useMyProjects";

const Profile = () => {
  // const { profileId } = useParams();
  const { idToken } = useAuthContext();
  const [profile, isPending] = useProfile();
  const [requests, isRequestsPending, makeRequest] = useRequests();
  const [projects, isProjectsPending] = useMyProjects();
  const navigate = useNavigate();
  console.log(projects);

  console.log(requests);

  // console.log(requests)

  // console.log(profile);

  // console.log(profile)

  const skills = ["React", "TypeScript", "Node.js", "Express.js"];

  const links = [
    {
      name: "Telegram",
      url: "https://t.me/username",
      icon: <Telegram />,
    },
    {
      name: "GitHub",
      url: "https://github.com/username",
      icon: <GitHub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/username",
      icon: <LinkedIn />,
    },
  ];

  // const projects = [
  //   {
  //     id: 1,
  //     name: "Project 1",
  //     description: "Description of Project 1",
  //     status: "In Progress",
  //     image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Project 2",
  //     description: "Description of Project 2",
  //     status: "Completed",
  //     image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Project 1",
  //     description: "Description of Project 1",
  //     status: "In Progress",
  //     image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Project 2",
  //     description: "Description of Project 2",
  //     status: "Completed",
  //     image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Project 1",
  //     description: "Description of Project 1",
  //     status: "In Progress",
  //     image: "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg",
  //   },
  // ];

  const [tabValue, setTabValue] = useState(0);

  // console.log(tabValue);

  const handleChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  // const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    if (tabValue == 0 || requests == null) return;

    makeRequest();
  }, [tabValue]);

  useEffect(() => {
    if (!idToken) {
      navigate("/");
    }
  }, [idToken]);

  if (isPending)
    return (
      <CircularProgress
        // variant="determinate"
        color="secondary"
      />
    );

  return (
    <Grid
      container
      py="72px"
      px={{ xs: "36px", sm: "48px", md: "96px" }}>
      <Grid
        item
        xs={12}
        md={4}
        container
        direction="column">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          mb="48px">
          <Avatar
            alt="User Name"
            src={profile?.pic || "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg"}
            sx={{ width: 150, height: 150, borderRadius: "50%", mb: "20px" }}
          />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "32px",
              color: "#2144F5",
            }}>
            {profile?.username}
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
            }}>
            {profile?.job_title || "No Job Title"}
          </Typography>
        </Box>
        {profile!.skills.length > 0 && (
          <Box
            textAlign="left"
            mb="48px">
            <Typography
              sx={{
                color: "#2144F5",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "uppercase",
                mb: "1.5rem",
              }}>
              Skills
            </Typography>
            <Box
              display="flex"
              justifyContent="start"
              gap="1rem"
              flexWrap="wrap">
              {profile?.skills.map((skill) => (
                <Button
                  key={skill}
                  variant="outlined"
                  sx={{
                    padding: "8px 16px",
                    border: "1px solid",
                    borderRadius: "25px",
                    fontWeight: "500",
                    fontSize: "16px",
                    textTransform: "lowercase",
                    color: "#0A0908",
                    ":hover": {
                      borderColor: "#000",
                      backgroundColor: "#9498AD",
                    },
                  }}>
                  #{skill}
                </Button>
              ))}
            </Box>
          </Box>
        )}
        {profile?.description && (
          <Box
            textAlign="left"
            mb="48px">
            <Typography
              sx={{
                color: "#2144F5",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "uppercase",
                mb: "1.5rem",
              }}>
              About
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "16px",
              }}>
              {profile?.description}
            </Typography>
          </Box>
        )}
        <Box
          textAlign="left"
          mb="48px">
          {/* <Typography
            sx={{
              color: "#2144F5",
              fontWeight: "500",
              fontSize: "16px",
              textTransform: "uppercase",
              mb: "1.5rem",
            }}>
            Social media
          </Typography> */}
          <Box
            display="flex"
            justifyContent="start"
            gap="1.5rem"
            flexWrap="wrap">
            {/* {links.map((link, index) => ( */}
            {profile?.github_link && (
              <IconButton
                key={profile?.github_link}
                href={profile?.github_link}
                target="_blank"
                sx={{ width: "20px", heigth: "20px", color: "#0A0908" }}>
                <GitHub />
              </IconButton>
            )}
            {profile?.linkedin_link && (
              <IconButton
                key={profile?.linkedin_link}
                href={profile?.linkedin_link}
                target="_blank"
                sx={{ width: "20px", heigth: "20px", color: "#0A0908" }}>
                <LinkedIn />
              </IconButton>
            )}
            {/* ))} */}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}>
        <Tabs
          value={tabValue}
          onChange={handleChange}>
          <Tab
            label="Projects"
            sx={{
              "&.Mui-selected": { color: "#2144F5;" },
              pl: { xs: "0", md: "24px" },
              fontWeight: "700",
              fontSize: "24px",
              mr: { xs: "0", md: "36px" },
              color: "#9498AD",
            }}
          />
          <Tab
            label="Your Requests"
            sx={{ "&.Mui-selected": { color: "#2144F5;" }, fontWeight: "700", fontSize: "24px", color: "#9498AD" }}
          />
        </Tabs>
        {tabValue === 0 && (
          <Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              flexGrow="1"
              px={{ xs: "0", md: "24px" }}
              py="24px">
              <IconButton sx={{ border: "1px solid", borderRadius: "50%", mr: "36px" }}>
                <AddIcon sx={{ height: "20px", width: "20px", color: "#0A0908", margin: "30px" }} />
              </IconButton>
              <Box textAlign="left">
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "24px",
                  }}>
                  Create Project
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#9498AD",
                  }}>
                  Add Project
                </Typography>
              </Box>
            </Box>
            <Box sx={{ px: { xs: "0", md: "24px" }, py: "24px", display: "flex", justifyContent: "flex-end" }}>
              <SelectForm />
            </Box>
            <Box padding="0">
              {isProjectsPending && <CircularProgress color="secondary" />}
              {!isProjectsPending && (
                <>
                  {projects.map((project) => (
                    <ProjectCard
                      id={project.id}
                      key={project.id}
                      name={project.title}
                      description={project.description}
                      status={project.status}
                      image={project.pic}
                    />
                  ))}
                </>
              )}
            </Box>
          </Box>
        )}
        {tabValue === 1 && (
          <Box>
            <Box sx={{ px: { xs: "0", md: "24px" }, py: "24px", display: "flex", justifyContent: "flex-end" }}>
              <FilterByStatus />
            </Box>
            {isRequestsPending && <CircularProgress color="secondary" />}
            {!isRequestsPending &&
              requests?.map((request) => (
                <Box padding="0">
                  <RequestCard
                    key={request.id}
                    id={request.id}
                    name={request.title}
                    description={request.description}
                    status={request.status}
                  />
                </Box>
              ))}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Profile;
