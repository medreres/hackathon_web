import React, { useEffect, useState } from "react";
import { fetchProjectRequests } from "../../../api";
import { IRequest } from "../../../api/projects/fetchRequests";

export default function useRequests(projectId: string) {
  const [requests, setRequests] = useState<IRequest[] | null>(null);
  const [isPending, setIsPending] = useState(true);

  const removeRequest = (id: string) => {
    setRequests((prevState) => prevState!.filter((req) => req.id !== id));
  };

  useEffect(() => {
    fetchProjectRequests(projectId).then((request) => {
      setRequests(request);
      setIsPending(false);
    });
  }, [projectId]);

  return [requests, isPending, removeRequest] as [typeof requests, boolean, typeof removeRequest];
}
