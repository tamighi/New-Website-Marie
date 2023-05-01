import { getServices } from "api";
import { useQuery } from "react-query";
import { ServiceDto } from "types/service";

const useServices = () => {
  const { data, isLoading, isError } = useQuery<ServiceDto[]>(
    "services",
    getServices
  );
  return { data, isLoading, isError };
};

export default useServices;
