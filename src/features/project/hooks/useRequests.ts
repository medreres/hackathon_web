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
    try {
      fetchProjectRequests(projectId).then((request) => {
        setRequests(request);
        setIsPending(false);
      });
    } catch (error) {}
  }, [projectId]);

  return [requests, isPending, removeRequest] as [typeof requests, boolean, typeof removeRequest];
}
