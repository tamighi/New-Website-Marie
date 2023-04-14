import { ResourceType } from "api/types";

type MessageResourceString = "question" | "review" | "devis";

export type MessageDetailsProps<T extends ResourceType<MessageResourceString>> =
  {
    message: T;
  };

export const MessageDetails = <T extends ResourceType<MessageResourceString>>(
  props: MessageDetailsProps<T>
) => {
  const { message } = props;

  return (
    <p style={{ whiteSpace: "break-spaces" }}>
      Email: {message.email}
      <br />
      <br />
      Nom : {message.name}
      <br />
      <br />
      Status : {message.status}
      <br />
      <br />
      Message : <br />
      <br />
      {message.message}
      <br />
    </p>
  );
};
