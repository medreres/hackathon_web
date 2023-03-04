export { default as get } from "../../lib/requests/get";

export interface ICreateProject {
  title: string;
  description: string;
  tags: string[];
}
export { default as getProject } from "./getProject";
export { default as createProject } from "./createProject";
export { default as updateProject } from "./updateProject";
