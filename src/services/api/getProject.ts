import { get } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";

export default async (id: string) => {
  const url = buildUrl(`/projects/${id}`);
  return get(url.toString()).then(({ data }) => data);
};
