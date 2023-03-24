import { getService } from "api/api";
import { useQuery, useQueryClient } from "react-query";
import { ServiceDto } from "resources/service";

export const useService = (id: string) => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["services", id], () => getService(id), {
    initialData: () => {
      const services = queryClient.getQueryData<ServiceDto[]>("services");

      const initialData = services?.find((item) => item.id == id);

      return initialData;
    },
  });

  return { data };
};
