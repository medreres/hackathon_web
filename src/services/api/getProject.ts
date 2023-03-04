import { buildUrl } from "../../utils/buildUrl";
import get from "./get";

export default async (id: string) => {
  const url = buildUrl(`/projects/${id}`);
  return get(url.toString()).then(({ data }) => data);
};
