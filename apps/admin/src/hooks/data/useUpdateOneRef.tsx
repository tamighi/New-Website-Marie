import { dataProvider, ResourceString, UpdateParams } from "api/dataProvider";
import { useMutation, useQueryClient } from "react-query";

interface UpdateOneOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  parentResource: string;
}

export const useUpdateOneRef = (
  resource: ResourceString,
  options: UpdateOneOptions
) => {
  const queryClient = useQueryClient();

  const { onError, parentResource, onSuccess } = options;

  const mutation = useMutation(
    (params: UpdateParams) => dataProvider.update(resource, params),
    {
      onSuccess: () => {
        onSuccess?.();
        queryClient.invalidateQueries([parentResource]);
      },
      onError
    }
  );
  return mutation;
};
