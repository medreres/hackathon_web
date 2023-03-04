import { ICreateProject } from "..";
import { post } from "../../../lib/requests";
import { buildUrl } from "../../../utils/buildUrl";
import { BASE_URL } from "../../../config/default.json";

export default async (authToken: string, payload: ICreateProject) => {
  const url = buildUrl(`${BASE_URL}/projects`);
  return post(url.toString(), {
    ...payload,
    "Authorization-Google": authToken,
  }).then(({ data }) => data);
};
