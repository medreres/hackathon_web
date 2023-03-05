import { BASE_URL } from "../../config/default.json";
import { get } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
import { IProject } from "./fetchProject";

export default async (status: string, tags: string[]): Promise<IProject[]> => {
  const tagsFormatted = tags.join(",");
  const params = {
    status,
    tags: tagsFormatted,
  };
  const url = buildUrl("/projects/open", BASE_URL, params);
  return get(url.toString()).then(({ data }) => data as IProject[]);
};
