import React, { useEffect, useState } from "react";
import { fetchProject } from "../../../api";

export interface IProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "OPEN" | "IN_PROGRESS" | "CLOSED";
  team: ITeamMember[];
  result_link: string;
  pic: string;
  author: boolean;
}

export interface ITeamMember {
  id: string;
  pic: string;
}
export default function useProject(projectId: string) {
  const [project, setProject] = useState<IProject | null>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetchProject(projectId).then((project) => {
      setProject(project);
      setIsPending(false);
    });
  }, [projectId]);

  return [project, isPending] as [typeof project, boolean];
}
