import { dataProvider } from "admin/api/dataProvider";
import { useQuery } from "react-query";

export const useGetData = <T extends object>(ressource: string) => {
  const data = useQuery<{ data: T[]; count: number }>(`${ressource}`, () =>
    dataProvider.getList(ressource, {
      sort: { field: "id", order: "DESC" },
      pagination: { page: 1, perPage: 10 },
      filter: {},
    })
  );

  return data;
};

export const useGetOne = <T extends object>(ressource: string, id: string) => {
  const data = useQuery<{ data: T }>([ressource, id], () =>
    dataProvider.getOne(ressource, { id: id })
  );
  return data;
};
