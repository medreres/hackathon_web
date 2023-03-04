import { ICreateProject } from ".";
import { put } from "../../lib/requests";
import { BASE_URL } from "../../config/default.json";

export default async (id: string, payload: ICreateProject) => {
  return put(`${BASE_URL}/projects/${id}`, payload).then(({ data }) => data);
};
