import { ICreateProject } from ".";
import { put } from "../../lib/requests";

export default async (id: string, payload: ICreateProject) => {
  return put(`/projects/${id}`, payload).then(({ data }) => data);
};
