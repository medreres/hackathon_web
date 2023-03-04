import { ICreateProject } from ".";
import { put } from "../../lib/requests";
import { BASE_URL } from "../../config/default.json";
import { buildUrl } from "../../utils/buildUrl";

export default async (id: string, payload: ICreateProject) => {
  const url = buildUrl(`/projects/${id}`, BASE_URL);
  return put(url.toString(), payload).then(({ data }) => data);
};
