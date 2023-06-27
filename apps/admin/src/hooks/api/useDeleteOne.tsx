import React from "react";

import { useAlert } from "lib";

import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { dataProvider, DeleteParams, GetListParams } from "services/api";
import { ResourceString, ResourceType } from "types";
import { Alert } from "components";

export const useDeleteOne = <R extends ResourceString>(
  resource: string,
  query?: GetListParams<ResourceType<R>>
) => {
  const queryClient = useQueryClient();

  const queryKey = query ? [resource, query] : [resource];

  const undoRef = React.useRef<() => void>();

  const alert = useAlert();

  const navigate = useNavigate();

  const onUndo = React.useCallback(() => undoRef.current?.(), [undoRef]);

  const mutation = useMutation(
    (params: DeleteParams) => {
      const mutationPromise = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          dataProvider
            .delete(resource, params)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        }, 5000);
        const cancelMutation = () => {
          clearTimeout(timeout);
          alert.close();
          resolve({ message: "Undo" });
        };
        undoRef.current = cancelMutation;
      });

      return mutationPromise;
    },
    {
      onMutate: async (params) => {
        alert.show({
          render: <Alert message="Item deleted !" onUndo={onUndo} />,
        });

        // TODO: Necessary ? Or page item deleted ?
        navigate(-1);

        // TODO: What is this ?
        await queryClient.cancelQueries(queryKey);

        // Optimistic update
        const oldData = queryClient.getQueryData<{
          data: { id: number | string }[];
        }>(queryKey);
        if (oldData) {
          queryClient.setQueryData(queryKey, () => {
            return {
              ...oldData,
              data: oldData.data.filter((object) => params.id !== object.id),
            };
          });
        }
        return { oldData };
      },
      onError: (_, __, context) => {
        alert.show({
          render: <Alert message="An error has occured on the deletion." />,
        });
        queryClient.setQueryData(queryKey, context?.oldData);
      },
      onSuccess: (data, _, context) => {
        if (
          data &&
          typeof data === "object" &&
          "message" in data &&
          data.message === "Undo"
        ) {
          queryClient.setQueryData(queryKey, context?.oldData);
        } else {
          queryClient.invalidateQueries(queryKey);
        }
      },
    }
  );
  return mutation;
};
