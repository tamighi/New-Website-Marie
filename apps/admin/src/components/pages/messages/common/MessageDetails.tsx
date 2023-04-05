import { MessageDto } from "./message";

export type MessageDetailsProps<T extends MessageDto> = {
  message: T;
};

export const MessageDetails = <T extends MessageDto>(
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
