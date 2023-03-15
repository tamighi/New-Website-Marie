import { dataProvider, GetOneParams } from "api/dataProvider";
import { useGetSearchParams } from "hooks";
import { useQuery, useQueryClient } from "react-query";

export const useGetOne = (resource: string, params: GetOneParams) => {
  const { id } = params;

  const query = useGetSearchParams();

  const queryClient = useQueryClient();

  const initialData = () => {
    const data = queryClient.getQueryData<
      Record<string, { id: number | string }[]>
    >([resource, query]);

    const initialData = data?.data?.find((item) => item.id == id);

    return initialData ? { data: initialData } : undefined;
  };

  const queryResult = useQuery(
    [resource, params],
    () => dataProvider.getOne(resource, params),
    {
      initialData,
    }
  );
  return queryResult;
};
