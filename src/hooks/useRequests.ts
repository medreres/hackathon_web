import React, { useState } from "react";
import { fetchRequests } from "../api";
import { IRequest } from "../api/user/fetchRequests";

export default function useRequests() {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const makeRequest = async () => {
    return fetchRequests().then((requests) => {
      setRequests(requests.reverse());
      setIsPending(false);
    });
  };
  const [isPending, setIsPending] = useState(true);
  return [requests, isPending, makeRequest] as [typeof requests, boolean, typeof makeRequest];
}
