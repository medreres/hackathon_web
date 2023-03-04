import { setHeaders } from "../../lib/requests";

export interface ICreateProject {
  title: string;
  description: string;
  tags: string[];
}
export { default as getProject } from "./projects/getProject";
export { default as createProject } from "./projects/createProject";
export { default as updateProject } from "./projects/updateProject";
export { default as startProject } from "./projects/startProject";

export function setAuthToken(authToken: string) {
  setHeaders({ "Authorization-Google": authToken });
}
