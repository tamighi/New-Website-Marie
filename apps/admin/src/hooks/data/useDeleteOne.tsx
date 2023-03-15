import { dataProvider, DeleteParams } from "api/dataProvider";
import { useGetSearchParams } from "hooks";
import { useMutation, useQueryClient } from "react-query";

interface DeleteOneOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useDeleteOne = (
  resource: string,
  options: DeleteOneOptions = {}
) => {
  const queryClient = useQueryClient();

  const query = useGetSearchParams();

  const { onError, ...rest } = options;

  const mutation = useMutation(
    (params: DeleteParams) => dataProvider.delete(resource, params),
    {
      onMutate: async (params) => {
        await queryClient.cancelQueries([resource, query]);

        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>([resource, query]);
        if (oldData) {
          queryClient.setQueryData([resource, query], () => {
            return {
              ...oldData,
              data: oldData.data.filter((object) => params.id !== object.id),
            };
          });
        }
        return { oldData };
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([resource, query], context?.oldData);
        onError?.(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [resource, query] });
      },
      ...rest,
    }
  );
  return mutation;
};
