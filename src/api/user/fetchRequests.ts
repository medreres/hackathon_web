import { get } from "../../lib/requests";
import { buildUrl } from "../../utils/buildUrl";
import { BASE_URL } from "../../config/default.json";
interface IRequest {
  id: string;
  title: string;
  description: string;
  tags: string[];
  team: [
    {
      id: string;
      pic: string;
    }
  ];
  // TODO statuses available
  status: "REJECTED" | "ACCEPTED" | "PENDING";
  rejection_reason: string;
}
export default async (): Promise<IRequest[]> => {
  const url = buildUrl("/requests/for_user", BASE_URL);
  return get(url.toString()).then(({ data }) => data as IRequest[]);
};
