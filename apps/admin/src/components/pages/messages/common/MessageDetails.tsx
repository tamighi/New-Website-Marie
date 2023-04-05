import { MessageDto } from "./message";

export type MessageDetailsProps<T extends MessageDto> = {
  message: T;
};

export const MessageDetails = <T extends MessageDto>(props: MessageDetailsProps<T>) => {
  const { message } = props;

  return (
    <p>
      {message.email}
      <br />
      {message.name}
      <br />
      {message.message}
      <br />
    </p>
  );
};
