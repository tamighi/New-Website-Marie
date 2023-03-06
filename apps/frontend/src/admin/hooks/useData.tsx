import React from "react";

import {
  CreateParams,
  dataProvider,
  DeleteManyParams,
  GetListParams,
  GetOneParams,
  UpdateParams,
} from "admin/api/dataProvider";
import { useQuery, useQueryClient } from "react-query";

export const useGetList = (ressource: string, params: GetListParams) => {
  const queryResult = useQuery([ressource, params.pagination.page],
    () => dataProvider.getList(ressource, params),
    { suspense: true }
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

export const useCreate = (ressource: string) => {
  const queryClient = useQueryClient();

  const create = React.useCallback(
    async (params: CreateParams) => {
      await dataProvider.create(ressource, params);
      queryClient.invalidateQueries(ressource);
    },
    [queryClient, ressource]
  );

  return create;
};
