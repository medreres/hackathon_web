import { setHeaders } from "../lib/requests";

export default (authToken: string) => {
  setHeaders({ "Authorization-Google": authToken });
};
