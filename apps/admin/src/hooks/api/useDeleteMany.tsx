import { dataProvider, DeleteManyParams } from "services/api";
import { useGetSearchParams } from "hooks";
import { useMutation, useQueryClient } from "react-query";

interface DeleteManyOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useDeleteMany = (
  resource: string,
  options: DeleteManyOptions = {}
) => {
  const queryClient = useQueryClient();

  const query = useGetSearchParams();

  const { onError, onSuccess } = options;

  const mutation = useMutation(
    (params: DeleteManyParams) => dataProvider.deleteMany(resource, params),
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
              data: oldData.data.filter(
                (object) => !params.ids.includes(object.id)
              ),
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
      onSuccess,
    }
  );

  return mutation;
};
