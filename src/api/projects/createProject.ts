import { post } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../config/default.json";

export interface ICreateProject {
  title: string;
  description: string;
  tags: string[];
}
/**
 * @returns id of created project
 */
export default async (payload: ICreateProject): Promise<string> => {
  const url = buildUrl(`/projects`, BASE_URL);
  return post(url.toString(), {
    ...payload,
    // "Authorization-Google": authToken,
  }).then(({ data }) => data.id as string);
};
