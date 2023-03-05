import { setHeaders } from "../lib/requests";

export default (authToken: string) => {
  // console.log(authToken);
  // console.log('authToken', authToken)
  setHeaders({ "Authorization-Google": authToken });
};
