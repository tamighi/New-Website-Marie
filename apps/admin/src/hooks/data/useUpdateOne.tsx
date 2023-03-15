import { dataProvider, UpdateParams } from "api/dataProvider";
import { useGetSearchParams } from "hooks";
import { useMutation, useQueryClient } from "react-query";

interface UpdateOneOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useUpdateOne = (
  resource: string,
  options: UpdateOneOptions = {}
) => {
  const queryClient = useQueryClient();

  const query = useGetSearchParams();

  const { onError, ...rest } = options;

  const mutation = useMutation(
    (params: UpdateParams) => dataProvider.update(resource, params),
    {
      onMutate: async (newData) => {
        await queryClient.cancelQueries([resource, query]);

        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>([resource, query]);

        if (oldData) {
          queryClient.setQueryData([resource, query], () => {
            return {
              ...oldData,
              data: [
                ...oldData.data.map((previous) =>
                  previous.id == newData.id
                    ? { ...previous, ...newData.data }
                    : previous
                ),
              ],
            };
          });
        }

        const updated = queryClient.getQueryData<{
          data: { id: number | string };
        }>([resource, { id: newData.id.toString() }]);
        if (updated) {
          queryClient.setQueryData(
            [resource, { id: newData.id.toString() }],
            () => {
              return {
                ...updated,
                data: { ...updated?.data, ...newData.data },
              };
            }
          );
        }

        return { oldData, updated };
      },
      onError: (error, _, context) => {
        onError?.(error);
        if (context?.updated) {
          queryClient.setQueryData(
            [resource, { id: context.updated.data.id.toString() }],
            context?.updated
          );
        }
        if (context?.oldData) {
          queryClient.setQueryData([resource, query], context.oldData);
        }
      },
      onSettled: (data) => {
        queryClient.invalidateQueries([
          resource,
          { id: data?.data.id.toString() },
        ]);
        queryClient.invalidateQueries([resource, query]);
      },
      ...rest,
    }
  );
  return mutation;
};
