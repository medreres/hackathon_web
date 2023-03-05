import React, { useState } from "react";
import { fetchProjects } from "../api";
import { IProject } from "../api/projects/fetchProject";

export default function useProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isPending, setIsPending] = useState(false);
  const search = (tags: string[]) => {
    setIsPending(true);
    fetchProjects("", tags).then((response) => {
      setProjects(response);
      setIsPending(false);
    });
  };

  return [projects, isPending, search] as [typeof projects, boolean, typeof search];
}
