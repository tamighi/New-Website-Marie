import { dataProvider } from "admin/api/dataProvider";
import { useQuery } from "react-query";

export const useGetData = (ressource: string) => {
  const data = useQuery<{ data: object[]; count: number } | null>(
    `${ressource}`,
    () =>
      dataProvider.getList(ressource, {
        sort: { field: "id", order: "DESC" },
        pagination: { page: 1, perPage: 10 },
        filter: {},
      })
  );

  return data;
};

export const useGetOne = (ressource: string, id: string) => {
  const data = useQuery<{ data: object } | null>([ressource, id], () =>
    dataProvider.getOne(ressource, { id: id })
  );
  return data.data || { data: undefined };
};
