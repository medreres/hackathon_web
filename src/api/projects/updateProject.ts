import { BASE_URL } from "../../config/default.json";
import { put } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
import { ICreateProject } from "./createProject";
interface IUpdatedProject extends ICreateProject {
  id: string;
}
export default async (id: string, payload: ICreateProject): Promise<IUpdatedProject> => {
  const url = buildUrl(`/projects/${id}`, BASE_URL);
  return put(url.toString(), payload).then(({ data }) => data as IUpdatedProject);
};
