import axios from "axios";

export { default as post } from "./post";
export { default as get } from "./get";
export { default as put } from "./put";
export function setHeaders(headers: { [key: string]: string }) {
  Object.entries(headers).forEach(([key, value]: [string, string]) => {
    axios.defaults.headers.common[key] = value;
  });
}
