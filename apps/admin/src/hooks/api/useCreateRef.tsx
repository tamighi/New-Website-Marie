import { CreateParams, dataProvider } from "api/dataProvider";
import { useMutation, useQueryClient } from "react-query";

interface CreateRefOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  parentResource: string;
}

export const useCreateRef = (resource: string, options: CreateRefOptions) => {
  const queryClient = useQueryClient();

  const { onError, onSuccess: onSuccessCallback, parentResource } = options;

  const onSuccess = () => {
    onSuccessCallback?.();
    queryClient.invalidateQueries([parentResource]);
  };

  const mutation = useMutation(
    (params: CreateParams) => dataProvider.create(resource, params),
    {
      onSuccess,
      onError,
    }
  );

  return mutation;
};
