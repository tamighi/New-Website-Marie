import { MessageDto } from "./message";

type Props<T extends MessageDto> = {
  message: T;
};

export const MessageDetails = <T extends MessageDto>(props: Props<T>) => {
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
