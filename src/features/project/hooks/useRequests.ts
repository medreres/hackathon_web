import React, { useEffect, useState } from "react";
import { fetchProjectRequests } from "../../../api";
import { IRequest } from "../../../api/projects/fetchRequests";

export default function useRequests(projectId: string) {
  const [requests, setRequests] = useState<IRequest[] | null>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetchProjectRequests(projectId).then((project) => {
      setRequests(project);
      setIsPending(false);
    });
  }, [projectId]);

  return [requests, isPending] as [typeof requests, boolean];
}
