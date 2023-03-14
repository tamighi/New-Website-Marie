import {
  CreateParams,
  dataProvider,
  DeleteManyParams,
  DeleteParams,
  UpdateParams,
} from "api/dataProvider";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";

interface QueryOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  query?: { [k: string]: string };
}

const baseParams = { filter: "{}", range: "[0, 19]", sort: '["id", "DESC"]' };

const useGetQuery = () => {
  const [params, _] = useSearchParams();
  return { ...baseParams, ...Object.fromEntries(params) };
};

export const useGetList = (ressource: string, options?: QueryOptions) => {
  const query = useGetQuery();

  const queryResult = useQuery(
    [ressource, query],
    () => dataProvider.getList(ressource, query),
    { ...options }
  );
  return queryResult;
};

export const useGetOne = (
  ressource: string,
  id: number | string,
  options?: QueryOptions
) => {
  const query = useGetQuery();

  const queryClient = useQueryClient();

  const queryResult = useQuery(
    [ressource, id],
    () => dataProvider.getOne(ressource, { id }),
    {
      initialData: () => {
        const data = queryClient.getQueryData<
          Record<string, { id: number | string }[]>
        >([ressource, query]);
        const initialData = data?.data?.find((item) => item.id == id);

        return initialData ? { data: initialData } : undefined;
      },
      ...options,
    }
  );
  return queryResult;
};

export const useDeleteOne = (ressource: string, options: QueryOptions = {}) => {
  const query = useGetQuery();

  const queryClient = useQueryClient();

  const { onError, ...rest } = options;

  const mutation = useMutation(
    (params: DeleteParams) => dataProvider.delete(ressource, params),
    {
      onMutate: async (params) => {
        await queryClient.cancelQueries(ressource);
        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>([ressource, query]);
        if (oldData) {
          queryClient.setQueryData([ressource, 1], () => {
            return {
              ...oldData,
              data: oldData.data.filter((object) => params.id !== object.id),
            };
          });
        }
        return { oldData };
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([ressource, query], context?.oldData);
        onError?.(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [ressource, query] });
      },
      ...rest,
    }
  );
  return mutation;
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

interface RefOptions {
  refRessource: string;
  refId: string;
}

export const useDeleteOneRef = (
  ressource: string,
  options: QueryOptions & RefOptions
) => {
  const query = useGetQuery();

  const queryClient = useQueryClient();

  const { refRessource, onSuccess, refId, ...rest } = options;

  const mutation = useMutation(
    (params: DeleteParams) => dataProvider.delete(ressource, params),
    {
      onSuccess: () => {
        onSuccess?.();
        queryClient.invalidateQueries({ queryKey: [refRessource, query] });
        queryClient.invalidateQueries({ queryKey: [refRessource, refId] });
      },
      ...rest,
    }
  );
  return mutation;
};
