import { getServices } from "api/api";
import { useQuery } from "react-query";

export const useServices = () => {
  const queryResult = useQuery("services", getServices);
  return queryResult;
};
