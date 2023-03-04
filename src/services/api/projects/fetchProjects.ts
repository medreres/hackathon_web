import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../config/default.json";
import { get } from "../../lib/requests";

export default async (status: string, tags: string[]) => {
  const tagsFormatted = tags.join(",");
  const params = {
    status,
    tag: tagsFormatted,
  };
  const url = buildUrl("/projects", BASE_URL, params);
  return get(url.toString()).then(({ data }) => data);
};
