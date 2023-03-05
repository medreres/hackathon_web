import { CircularProgress, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { WithContext as ReactTags } from "react-tag-input";
import useProjects from "../hooks/useProjects";

const DiscoverProjects = () => {
  const [projects, isPending, search] = useProjects();
  useEffect(() => {
    search([]);
  }, []);

  return (
    <>
      <TextField label="Tags" />
      {isPending && <CircularProgress color="secondary" />}
      <Stack>
        {!isPending && (
          <>
            {projects.map((project) => (
              <div key={project.id}>
                <Typography color={"secondary"}>{project.title}</Typography>
              </div>
            ))}
          </>
        )}
      </Stack>
    </>
  );
};

export default DiscoverProjects;
