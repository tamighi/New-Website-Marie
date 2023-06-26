import { dataProvider, DeleteParams, GetListParams } from "services/api";
import { useAlert } from "lib";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { ResourceString, ResourceType } from "types";
import { Alert } from "components";

export const useDeleteOne = <R extends ResourceString>(
  resource: string,
  query?: GetListParams<ResourceType<R>>
) => {
  const queryClient = useQueryClient();

  const queryKey = query ? [resource, query] : [resource];

  const alert = useAlert();

  const navigate = useNavigate();

  const mutation = useMutation(
    (params: DeleteParams) => dataProvider.delete(resource, params),
    {
      onMutate: async (params) => {
        await queryClient.cancelQueries(queryKey);

        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>(queryKey);
        if (oldData) {
          queryClient.setQueryData(queryKey, () => {
            return {
              ...oldData,
              data: oldData.data.filter((object) => params.id !== object.id),
            };
          });
        }
        return { oldData };
      },
      onError: (_, __, context) => {
        queryClient.setQueryData(queryKey, context?.oldData);
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
      },
      onSuccess: () => {
        alert.show({ render: <Alert message="Item deleted !" /> });
        navigate(-1);
      },
    }
  );
  return mutation;
};
