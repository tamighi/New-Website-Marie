import { dataProvider, GetOneParams } from "api/dataProvider";
import { ResourceString, ResourceType } from "api/types";
import { useGetSearchParams } from "hooks";
import { useQuery, useQueryClient } from "react-query";

export const useGetOne = <R extends ResourceString>(
  resource: R,
  params: GetOneParams
) => {
  const { id } = params;

  const query = useGetSearchParams();

  const queryClient = useQueryClient();

  const initialData = () => {
    const data = queryClient.getQueryData<Record<string, ResourceType<R>[]>>([
      resource,
      query,
    ]);

    const initialData = data?.data?.find((item) => item.id == id);

    return initialData ? { data: initialData } : undefined;
  };

  const queryResult = useQuery(
    [resource, params],
    () => dataProvider.getOne<R>(resource, params),
    {
      initialData,
    }
  );
  return queryResult;
};
