import React from "react";

import {
  CreateParams,
  dataProvider,
  DeleteManyParams,
  GetOneParams,
  UpdateParams,
} from "admin/api/dataProvider";
import { useQuery, useQueryClient } from "react-query";

export const useGetList = <T extends object>(ressource: string) => {
  const { data } = useQuery(`${ressource}`, () =>
    dataProvider.getList<T>(ressource, {
      sort: { field: "id", order: "DESC" },
      pagination: { page: 1, perPage: 10 },
      filter: {},
    })
  );
  return { data };
};

export const useGetOne = <T extends object>(
  ressource: string,
  params: GetOneParams
) => {
  const data = useQuery([ressource, params.id], () =>
    dataProvider.getOne<T>(ressource, params)
  );
  return data;
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

export const useUpdateOne = <T extends object>(ressource: string) => {
  const queryClient = useQueryClient();

  const updateOne = React.useCallback(
    async (params: UpdateParams<T>) => {
      await dataProvider.update(ressource, params);
      queryClient.invalidateQueries(ressource);
    },
    [queryClient, ressource]
  );

  return updateOne;
};

export const useCreate = <T extends object>(ressource: string) => {
  const queryClient = useQueryClient();

  const create = React.useCallback(
    async (params: CreateParams<T>) => {
      await dataProvider.create(ressource, params);
      queryClient.invalidateQueries(ressource);
    },
    [queryClient, ressource]
  );

  return create;
};
