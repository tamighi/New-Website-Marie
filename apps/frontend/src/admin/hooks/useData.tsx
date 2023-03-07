import {
  CreateParams,
  dataProvider,
  DeleteManyParams,
  GetListParams,
  GetOneParams,
  UpdateParams,
} from "admin/api/dataProvider";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useGetList = (ressource: string, params: GetListParams) => {
  const queryResult = useQuery(
    [ressource, params.pagination.page],
    () => dataProvider.getList(ressource, params),
    { suspense: true, keepPreviousData: true }
  );
  return queryResult;
};

export const useGetOne = (ressource: string, params: GetOneParams) => {
  const queryClient = useQueryClient();

  const queryResult = useQuery(
    [ressource, params.id],
    () => dataProvider.getOne(ressource, params),
    {
      initialData: () => {
        const initialData = queryClient
          .getQueryData<Record<string, { id: number | string }[]>>(ressource)
          ?.data?.find((item) => item.id == params.id);

        return initialData ? { data: initialData } : undefined;
      },
    }
  );
  return queryResult;
};

interface MutationOptions {
  onSuccess: () => void;
}

export const useDeleteMany = (ressource: string, options?: MutationOptions) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (params: DeleteManyParams) => dataProvider.deleteMany(ressource, params),
    {
      onMutate: async (params) => {
        await queryClient.cancelQueries({ queryKey: ressource });
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
      onError: (_, __, context) => {
        queryClient.setQueryData([ressource, 1], context?.oldData);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [ressource, 1] });
      },
      ...options,
    }
  );

  return mutation;
};

export const useUpdateOne = (ressource: string, options?: MutationOptions) => {
  const queryClient = useQueryClient();

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
        queryClient.setQueryData<{ data: object }>(
          [ressource, newData.id],
          (oldData) => {
            return { ...oldData, data: { ...oldData?.data, ...newData.data } };
          }
        );
        return { oldData };
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([ressource, 1], context?.oldData);
      },
      onSettled: (data) => {
        queryClient.invalidateQueries([ressource, data?.data.id.toString()]);
        queryClient.invalidateQueries([ressource, 1]);
      },
      ...options,
    }
  );
  return mutation;
};

export const useCreate = (ressource: string, options?: MutationOptions) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (params: CreateParams) => dataProvider.create(ressource, params),
    {
      onSuccess: (data) => {
        options?.onSuccess();
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
    }
  );

  return mutation;
};
