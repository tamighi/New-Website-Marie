import { dataProvider, GetListParams } from "services/api";
import { ResourceString } from "types";
import { useQuery } from "react-query";

export const useGetList = <R extends ResourceString>(
  resource: ResourceString,
  params: GetListParams
) => {
  const queryResult = useQuery([resource, params], () =>
    dataProvider.getList<R>(resource, params)
  );
  return queryResult;
};
