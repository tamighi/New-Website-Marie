import { useGetCurrentQuery, useUpdateOne } from "hooks";
import { Button, useDialog } from "lib";
import { ResourceType } from "types";

type MessageResourceString = "question" | "review" | "devis";

type StatusFieldProps<R extends MessageResourceString> = {
  message: ResourceType<R>;
  resource: R;
};

export const StatusField = <R extends MessageResourceString>(
  props: StatusFieldProps<R>
) => {
  const { message, resource } = props;

  const { showDialog } = useDialog();

  const query = useGetCurrentQuery();
  const { mutate } = useUpdateOne<R>(
    resource,
    {
      onSuccess: () => {
        showDialog?.({ content: "Item updated !" });
      },
    },
    query
  );
  const onChange = (newStatus: "pending" | "refused" | "accepted") => {
    mutate({
      id: message.id,
      data: { status: newStatus } as Partial<ResourceType<R>>,
    });
  };
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {message.status === "pending" ? (
        <>
          <p style={{ flex: 1 }}>Pending</p>
          <Button>Accepter</Button>
          <Button>Refuser</Button>
        </>
      ) : (
        <>
          <p style={{ flex: 1 }}>{message.status}</p>
          <Button>Annuler</Button>
        </>
      )}
    </div>
  );
};
