import { getServices } from "api/api";
import { useQuery } from "react-query";
import { ServiceDto } from "resources/service";

export const useServices = () => {
  const { data, isLoading, isError } = useQuery<ServiceDto[]>("services", getServices);
  return { data, isLoading, isError };
};
