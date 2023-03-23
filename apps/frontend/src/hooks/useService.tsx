import { getService } from "api/api";
import { useQuery } from "react-query";
import { ServiceDto } from "resources/service";

export const useService = (id: string) => {
  const { data } = useQuery<ServiceDto>(["services", id], () => getService(id));
  return { data };
};
