import axios from "axios";

export default (url: string, payload?: {}) => {
  return axios.put(url, payload);
};
