import { dataProvider, DeleteParams } from "api/dataProvider";
import { useMutation, useQueryClient } from "react-query";

interface DeleteOneRefOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  parentResource: string;
}

export const useDeleteOneRef = (
  resource: string,
  options: DeleteOneRefOptions
) => {
  const queryClient = useQueryClient();

  const { onSuccess, onError, parentResource } = options;

  const mutation = useMutation(
    (params: DeleteParams) => dataProvider.delete(resource, params),
    {
      onSuccess: () => {
        onSuccess?.();
        queryClient.invalidateQueries([parentResource]);
      },
      onError,
    }
  );
  return mutation;
};
