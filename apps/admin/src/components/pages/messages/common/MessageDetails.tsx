import { ResourceType } from "api/dataProvider";

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
    <p>
      Email: {message.email}
      <br />
      Nom : {message.name}
      <br />
      Message : <br />
      {message.message}
      <br />
    </p>
  );
};
