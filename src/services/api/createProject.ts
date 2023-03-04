import { buildUrl } from "../../utils/buildUrl";
import post from "./post";

export interface ICreateProject {
  title: string;
  description: string;
  tags: string[];
}

export default async (payload: ICreateProject) => {
  const url = buildUrl("/projects", undefined, payload as {});
  return post(url.toString()).then(({ data }) => data);
};
