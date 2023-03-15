import { dataProvider, GetListParams } from "api/dataProvider";
import { useQuery } from "react-query";

export const useGetList = (resource: string, params: GetListParams) => {
  const queryResult = useQuery([resource, params], () =>
    dataProvider.getList(resource, params)
  );
  return queryResult;
};

