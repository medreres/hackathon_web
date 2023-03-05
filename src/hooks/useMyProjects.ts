import React, { useEffect, useState } from "react";
import { fetchMyProjects, fetchProjects } from "../api";
import { IProject } from "../api/projects/fetchProject";

export default function useMyProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetchMyProjects().then((response) => {
      setProjects(response);
      setIsPending(false);
    });
  }, []);

  return [projects, isPending] as [typeof projects, boolean];
}
