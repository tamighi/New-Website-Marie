import React from "react";

import {
  dataProvider,
  DeleteManyParams,
  GetOneParams,
  UpdateParams,
} from "admin/api/dataProvider";
import { useQuery, useQueryClient } from "react-query";

export const useGetList = (ressource: string) => {
  const { data } = useQuery<{ data: object[]; count: number } | null>(
    `${ressource}`,
    () =>
      dataProvider.getList(ressource, {
        sort: { field: "id", order: "DESC" },
        pagination: { page: 1, perPage: 10 },
        filter: {},
      })
  );
  return { data };
};

export const useGetOne = (ressource: string, params: GetOneParams) => {
  const { id } = params;
  const data = useQuery<{ data: object } | null>([ressource, id], () =>
    dataProvider.getOne(ressource, { id: id })
  );
  return data;
};

export const useDeleteMany = (ressource: string) => {
  const queryClient = useQueryClient();

  const deleteMany = React.useCallback(
    async (params: DeleteManyParams) => {
      const { ids } = params;
      await dataProvider.deleteMany(ressource, {
        ids,
      });
      queryClient.invalidateQueries(ressource);
    },
    [queryClient, ressource]
  );

  return deleteMany;
};

export const useUpdateOne = <T extends object>(ressource: string) => {
  const queryClient = useQueryClient();

  const updateOne = React.useCallback(
    async (params: UpdateParams<T>) => {
      const { id, data } = params;
      await dataProvider.update(ressource, {
        id,
        data,
      });
      queryClient.invalidateQueries(ressource);
    },
    [queryClient, ressource]
  );

  return updateOne;
};

export const useCreate = <T extends object>(ressource: string) => {
  const queryClient = useQueryClient();

  const create = React.useCallback(
    async (data: T) => {
      await dataProvider.create(ressource, {
        data,
      });
      queryClient.invalidateQueries(ressource);
    },
    [queryClient, ressource]
  );

  return create;
};
