import { put } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../config/default.json";

export default async (requestId: string, rejectReason: string): Promise<{}> => {
  const url = buildUrl(`/requests/${requestId}/reject`, BASE_URL);
  return put(url.toString(), {
    reject_reason: rejectReason,
  }).then(({ data }) => data as {});
};
