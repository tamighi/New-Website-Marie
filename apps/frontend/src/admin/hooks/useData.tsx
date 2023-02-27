import { dataProvider } from "admin/api/dataProvider";
import { useQuery } from "react-query";

export const useData = <T extends object>(ressource: string) => {
  const data = useQuery<{ data: T[]; count: number }>(`${ressource}`, () =>
    dataProvider.getList(ressource, {
      sort: { field: "id", order: "ASC" },
      pagination: { page: 1, perPage: 10 },
      filter: {},
    })
  );

  return data;
};
