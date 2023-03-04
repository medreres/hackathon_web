import { ICreateProject } from ".";
import { post } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";

export default async (payload: ICreateProject) => {
  const url = buildUrl("/projects");
  return post(url.toString(), payload).then(({ data }) => data);
};
