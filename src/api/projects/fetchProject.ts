import { BASE_URL } from "../../config/default.json";
import { get } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
export interface IProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "OPEN" | "IN_PROGRESS" | "CLOSED";
  team: [
    {
      id: string;
      pic: string;
    }
  ];
  result_link: string;
  pic: string;
  is_author: boolean;
}
export default async (id: string): Promise<IProject> => {
  const url = buildUrl(`/projects/${id}`, BASE_URL);
  return get(url.toString()).then(({ data }) => data as IProject);
};
