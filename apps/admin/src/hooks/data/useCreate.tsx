import { CreateParams, dataProvider } from "api/dataProvider";
import { useMutation, useQueryClient } from "react-query";

interface CreateOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const useCreate = (resource: string, options: CreateOptions = {}) => {
  const queryClient = useQueryClient();

  const { onError, onSuccess: onSuccessCallback } = options;

  const onSuccess = (data: CreateParams) => {
    onSuccessCallback?.();

    const oldData = queryClient.getQueryData<{ data: object[] }>([resource]);

    if (oldData) {
      queryClient.setQueryData([resource], () => {
        return {
          ...oldData,
          data: [data.data, ...oldData.data],
        };
      });
    }

    queryClient.invalidateQueries([resource]);
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
