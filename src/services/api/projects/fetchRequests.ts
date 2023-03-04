import { buildUrl } from "../../../utils/buildUrl";
import { BASE_URL } from "../../../config/default.json";
import { get } from "../../../lib/requests";

export interface IRequest {
  id: string;
  user_id: string;
  username: string;
  tags: string[];
}
export default async (projectId: string): Promise<IRequest[]> => {
  const url = buildUrl(`/requests/for_project`, BASE_URL, {
    project_id: projectId,
  });
  return get(url.toString()).then(({ data }) => data as IRequest[]);
};
