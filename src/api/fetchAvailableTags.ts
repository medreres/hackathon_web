import { get } from "../lib/requests";
import { buildUrl } from "../utils/buildUrl";
import { BASE_URL } from "../config/default.json";

export interface ITag {
  title: string;
  id: string;
}
export default async function (): Promise<ITag[]> {
  const url = buildUrl("/tags", BASE_URL);
  return get(url.toString()).then(({ data }) => data as ITag[]);
}
