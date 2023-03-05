import { get } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../config/default.json";
import { IProject } from "../projects/fetchProject";

export default async (): Promise<IProject[]> => {
  const url = buildUrl("/projects", BASE_URL, {
    status: "IN_PROGRESS",
  });
  return get(url.toString()).then(({ data }) => data as IProject[]);
};
