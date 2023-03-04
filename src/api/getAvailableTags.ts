import { get } from "../lib/requests";
import { buildUrl } from "../utils/buildUrl";
import { BASE_URL } from "../config/default.json";

export async function getAvailableTags() {
  interface ITag {
    title: string;
    id: string;
  }
  const url = buildUrl("/tags", BASE_URL);
  return get(url.toString()).then(({ data }) => data as ITag[]);
}
