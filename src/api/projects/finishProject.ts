import { put } from "../../lib/requests";
import { BASE_URL } from "../../config/default.json";
import { buildUrl } from "../../utils/buildUrl";

export default async (id: string, resultLink: string): Promise<{}> => {
  const url = buildUrl(`projects/${id}/finish`, BASE_URL);
  return put(url.toString(), {
    result_link: resultLink,
  }).then(({ data }) => data as {});
};
