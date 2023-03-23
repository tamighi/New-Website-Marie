import { getServices } from "api/api";
import { useQuery } from "react-query";
import { ServiceDto } from "resources/service";

export const useServices = () => {
  const { data } = useQuery<ServiceDto[]>("services", getServices);
  return data;
};
