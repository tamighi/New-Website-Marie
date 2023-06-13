import { dataProvider, UpdateParams } from "services/api";
import { ResourceString, ResourceType } from "types";
import { useMutation, useQueryClient } from "react-query";

interface UpdateOneOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  parentResource: string;
}

export const useUpdateOneRef = <R extends ResourceString>(
  resource: ResourceString,
  options: UpdateOneOptions
) => {
  const queryClient = useQueryClient();

  const { onError, parentResource, onSuccess } = options;

  const mutation = useMutation(
    (params: UpdateParams<ResourceType<R>>) =>
      dataProvider.update(resource, params),
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
