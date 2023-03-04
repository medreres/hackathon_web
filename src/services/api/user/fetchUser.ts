import { get } from "../../../lib/requests";
import { buildUrl } from "../../../utils/buildUrl";
import { BASE_URL } from "../../../config/default.json";
import IUser from "./interface";

export default async (userId: string): Promise<IUser> => {
  const url = buildUrl(`/profile/${userId}`, BASE_URL);
  return get(url.toString()).then(({ data }) => data as IUser);
};
