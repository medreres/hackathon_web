import { useEffect } from "react";
import React, { useState } from "react";
import IUser from "../api/user/interface";
import { fetchUser } from "../api";

export default function useProfile() {
  const [profile, setProfile] = useState<IUser | null>(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetchUser().then((profile) => {
      setProfile(profile);
      setIsPending(false);
    });
  }, []);
  return [profile, isPending] as [typeof profile, boolean]
}
