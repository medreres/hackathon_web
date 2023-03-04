import { put } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../config/default.json";

export default async (requestId: string): Promise<{}> => {
  const url = buildUrl(`/requests/${requestId}/accept`, BASE_URL);
  return put(url.toString()).then(({ data }) => data as {});
};
