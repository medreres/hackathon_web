import { get } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../config/default.json";

export default async (id: string) => {
  const url = buildUrl(`/projects/${id}`, BASE_URL);
  return get(url.toString()).then(({ data }) => data);
};
