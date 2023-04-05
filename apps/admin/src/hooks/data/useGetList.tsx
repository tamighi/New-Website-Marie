import { dataProvider, GetListParams, ResourceType } from "api/dataProvider";
import { useQuery } from "react-query";

export const useGetList = (resource: ResourceType, params: GetListParams) => {
  const queryResult = useQuery([resource, params], () =>
    dataProvider.getList(resource, params)
  );
  return queryResult;
};

