import {
  CreateParams,
  dataProvider,
  DeleteManyParams,
  GetListParams,
  GetOneParams,
  UpdateParams,
} from "api/dataProvider";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface QueryOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useGetList = (
  ressource: string,
  params: GetListParams,
  options?: QueryOptions
) => {
  const queryResult = useQuery(
    [ressource, params.pagination.page],
    () => dataProvider.getList(ressource, params),
    { ...options }
  );
  return queryResult;
};

export const useGetOne = (
  ressource: string,
  params: GetOneParams,
  options?: QueryOptions
) => {
  const queryClient = useQueryClient();

  const queryResult = useQuery(
    [ressource, params.id],
    () => dataProvider.getOne(ressource, params),
    {
      initialData: () => {
        const data = queryClient.getQueryData<
          Record<string, { id: number | string }[]>
        >([ressource, 1]);
        const initialData = data?.data?.find((item) => item.id == params.id);

        return initialData ? { data: initialData } : undefined;
      },
      ...options,
    }
  );
  return queryResult;
};

export const useDeleteMany = (
  ressource: string,
  options: QueryOptions = {}
) => {
  const queryClient = useQueryClient();

  const { onError, ...rest } = options;

  const mutation = useMutation(
    (params: DeleteManyParams) => dataProvider.deleteMany(ressource, params),
    {
      onMutate: async (params) => {
        await queryClient.cancelQueries(ressource);
        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>([ressource, 1]);
        if (oldData) {
          queryClient.setQueryData([ressource, 1], () => {
            return {
              ...oldData,
              data: oldData.data.filter(
                (object) => !params.ids.includes(object.id)
              ),
            };
          });
        }
        return { oldData };
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([ressource, 1], context?.oldData);
        onError?.(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [ressource, 1] });
      },
      ...rest,
    }
  );

  return mutation;
};

export const useUpdateOne = (ressource: string, options: QueryOptions = {}) => {
  const queryClient = useQueryClient();

  const { onError, ...rest } = options;

  const mutation = useMutation(
    (params: UpdateParams) => dataProvider.update(ressource, params),
    {
      onMutate: async (newData) => {
        await queryClient.cancelQueries(ressource);
        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>([ressource, 1]);
        if (oldData) {
          queryClient.setQueryData([ressource, 1], () => {
            return {
              ...oldData,
              data: [
                ...oldData.data.map((previous) =>
                  previous.id == newData.id
                    ? { ...previous, ...newData.data }
                    : previous
                ),
              ],
            };
          });
        }
        const updated = queryClient.getQueryData<{
          data: { id: number | string };
        }>([ressource, newData.id]);
        queryClient.setQueryData([ressource, newData.id], () => {
          return { ...updated, data: { ...updated?.data, ...newData.data } };
        });
        return { oldData, updated };
      },
      onError: (error, _, context) => {
        onError?.(error);
        queryClient.setQueryData(
          [ressource, context?.updated?.data.id],
          context?.updated
        );
        queryClient.setQueryData([ressource, 1], context?.oldData);
      },
      onSettled: (data) => {
        queryClient.invalidateQueries([ressource, data?.data.id.toString()]);
        queryClient.invalidateQueries([ressource, 1]);
      },
      ...rest,
    }
  );
  return mutation;
};

export const useCreate = (ressource: string, options: QueryOptions = {}) => {
  const queryClient = useQueryClient();
  const { onSuccess, ...rest } = options;

  const mutation = useMutation(
    (params: CreateParams) => dataProvider.create(ressource, params),
    {
      onSuccess: (data) => {
        onSuccess?.();
        const oldData = queryClient.getQueryData<{ data: object[] }>([
          ressource,
          1,
        ]);
        if (oldData) {
          queryClient.setQueryData([ressource, 1], () => {
            return {
              ...oldData,
              data: [data.data, ...oldData.data],
            };
          });
        }
        queryClient.invalidateQueries([ressource, 1]);
      },
      ...rest,
    }
  );

  return mutation;
};
