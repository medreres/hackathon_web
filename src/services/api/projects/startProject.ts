import { put } from "../../../lib/requests";
import { BASE_URL } from "../../../config/default.json";
import { buildUrl } from "../../../utils/buildUrl";

export default async (id: string): Promise<{}> => {
  const url = buildUrl(`/projects/${id}/start`, BASE_URL);
  return put(url.toString()).then(({ data }) => data as {});
};
