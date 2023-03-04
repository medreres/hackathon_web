import React, { useEffect, useState } from "react";

export interface IProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "OPEN" | "IN_PROGRESS" | "CLOSED";
  team: [
    {
      id: string;
      pic: string;
    }
  ];
  result_link: string;
  pic: string;
  is_author: boolean;
}
export default function useProject(projectId: string) {
  const [project, setproject] = useState<IProject | null>(null);
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    
  }, [projectId])

  return [project, isPending]
}
