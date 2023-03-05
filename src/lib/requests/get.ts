import axios from "axios";

export default function get(url: string): Promise<any> {
  return axios.get(url).catch(err => err)
}
