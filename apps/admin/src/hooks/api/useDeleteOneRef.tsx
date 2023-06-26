import { dataProvider, DeleteParams } from "services/api";
import { useMutation, useQueryClient } from "react-query";
import { useAlert } from "lib";
import { Alert } from "components";

interface DeleteOneRefOptions {
  parentResource: string;
}

export const useDeleteOneRef = (
  resource: string,
  options: DeleteOneRefOptions
) => {
  const queryClient = useQueryClient();

  const { parentResource } = options;

  const alert = useAlert();

  const mutation = useMutation(
    (params: DeleteParams) => dataProvider.delete(resource, params),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([parentResource]);
        alert.show({ render: <Alert message="Item deleted !" /> });
      },
    }
  );
  return mutation;
};
