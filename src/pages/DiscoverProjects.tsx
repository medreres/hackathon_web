import { Autocomplete, CircularProgress, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
// import { render } from "react-dom";
// import { WithContext as ReactTags } from "react-tag-input";
import useProjects from "../hooks/useProjects";
import useTags from "../hooks/useTags";

const DiscoverProjects = () => {
  const [projects, isPending, search] = useProjects();
  const [tags, isPendingTags] = useTags();
  const [selectedTags, setSelectedTags] = useState<any[]>([]);

  useEffect(() => {
    search(selectedTags);
  }, [selectedTags]);
  const handleTagSelection = (event: any, values: any) => {
    console.log(values);
    setSelectedTags(values);
  };

  return (
    <>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={isPending ? [] : tags.map((tag) => tag.title)}
        getOptionLabel={(option) => option}
        onChange={handleTagSelection}
        sx={{ width: "50%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            // label="#add needed skills"
            placeholder="#add needed skills"
            sx={{ mb: "24px", borderRadius: "2px" }}
          />
        )}
      />
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
