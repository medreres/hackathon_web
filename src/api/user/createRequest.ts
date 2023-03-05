import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../config/default.json";
import { post } from "../../lib/requests";

export default async (projectId: string): Promise<{}> => {
  const url = buildUrl(`/requests/for_project`, BASE_URL, {
    project_id: projectId,
  });
  return post(url.toString()).then(({ data }) => data as {});
};
