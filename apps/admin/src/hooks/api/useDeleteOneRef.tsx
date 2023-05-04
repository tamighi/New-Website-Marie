import { dataProvider, DeleteParams } from "services/api";
import { useDialog } from "lib";
import { useMutation, useQueryClient } from "react-query";

interface DeleteOneRefOptions {
  parentResource: string;
}

export const useDeleteOneRef = (
  resource: string,
  options: DeleteOneRefOptions
) => {
  const queryClient = useQueryClient();

  const { showDialog } = useDialog();
  const { parentResource } = options;

  const mutation = useMutation(
    (params: DeleteParams) => dataProvider.delete(resource, params),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([parentResource]);
        showDialog?.({ content: "Item deleted !" });
      },
    }
  );
  return mutation;
};
