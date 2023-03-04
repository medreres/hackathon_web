import { get } from "../../../lib/requests";
import { buildUrl } from "../../../utils/buildUrl";

export default async () => {
  const url = buildUrl("/requests/for_user");
  return get(url.toString()).then(({ data }) => data);
};
