import { dataProvider, DeleteParams } from "api/dataProvider";
import { useGetSearchParams } from "hooks";
import { useDialog } from "lib";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export const useDeleteOne = (resource: string) => {
  const queryClient = useQueryClient();

  const query = useGetSearchParams();

  const { showDialog } = useDialog();
  const navigate = useNavigate();

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
      onError: (_, __, context) => {
        queryClient.setQueryData([resource, query], context?.oldData);
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: [resource, query] });
      },
      onSuccess: () => {
        showDialog?.({ content: "Item deleted !" });
        navigate(-1);
      },
    }
  );
  return mutation;
};
