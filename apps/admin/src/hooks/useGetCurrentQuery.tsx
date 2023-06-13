import { useGetSearchParams } from "./useGetSearchParams";

export const useGetCurrentQuery = () => {
  const { sort, range, filter } = useGetSearchParams();

  const query = {
    sort: JSON.parse(sort),
    range: JSON.parse(range),
    filter: JSON.parse(filter),
  };

  return query;
};
