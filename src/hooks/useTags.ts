import React, { useEffect, useState } from "react";
import { fetchAvailableTags } from "../api";
import { ITag } from "../api/fetchAvailableTags";

export default function useTags() {
  const [tags, setTags] = useState<ITag[]>([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetchAvailableTags().then((tags) => {
      setTags(tags);
      setIsPending(false);
    });
  }, []);

  return [tags, isPending] as [typeof tags, boolean];
}
