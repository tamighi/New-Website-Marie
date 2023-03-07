import React from "react";

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

export const useDeleteMany = (ressource: string) => {
  const queryClient = useQueryClient();

  const deleteMany = React.useCallback(
    async (params: DeleteManyParams) => {
      await dataProvider.deleteMany(ressource, params);
      queryClient.invalidateQueries(ressource);
    },
    [queryClient, ressource]
  );

  return deleteMany;
};

export const useUpdateOne = (ressource: string) => {
  const queryClient = useQueryClient();

  const updateOne = React.useCallback(
    async (params: UpdateParams) => {
      await dataProvider.update(ressource, params);
      queryClient.invalidateQueries(ressource);
    },
    [queryClient, ressource]
  );

  return updateOne;
};

/*
    {
      onMutate: async (newData) => {
        await queryClient.cancelQueries({ queryKey: [ressource, 1] });
        const oldData = queryClient.getQueryData<{ data: object[] }>([
          ressource,
          1,
        ]);
        if (oldData) {
          queryClient.setQueryData([ressource, 1], () => {
            return {
              ...oldData,
              data: [{ ...newData.data }, ...(oldData?.data || [])],
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
    */

interface MutationOptions {
  onSuccess: () => void;
}

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
              data: [data.data, ...(oldData?.data || [])],
            };
          });
        }
      },
    }
  );

  return mutation;
};
