import { post } from "../../lib/requests";
import { BASE_URL } from "../../config/default.json";

export default async (id: string) => {
  return post(`${BASE_URL}/projects/${id}/finish`).then(({ data }) => data);
};
