import axios from "axios";

export default function post(url: string): Promise<any> {
  return axios.post(url);
}
