import axios from "axios";

export default function post(url: string, payload?: {}): Promise<any> {
  return axios.post(url, payload);
}
