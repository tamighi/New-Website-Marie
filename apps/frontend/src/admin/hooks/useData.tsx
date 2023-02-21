import { dataProvider } from "admin/api/dataProvider";
import { useQuery } from "react-query";

export const useData = (ressource: string) => {
  const data = useQuery(ressource, () =>
    dataProvider.getList(ressource, {
      sort: { field: "id", order: "DESC" },
      pagination: { page: 1, perPage: 10 },
      filter: {},
    })
  );

  return data;
}
