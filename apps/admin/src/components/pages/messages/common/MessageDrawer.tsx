import { RightDrawer } from "components/pages/core";
import { matchPath, useLocation } from "react-router-dom";
import { MessageDto } from "./message";

type Props<T extends MessageDto> = {
  resource: string;
  message: T;
};

export const MessageDrawer = <T extends MessageDto>(props: Props<T>) => {
  const { resource, message } = props

  const location = useLocation();

  const match = matchPath(`/${resource}/:id`, location.pathname);

  return (
    <RightDrawer open={!!match}>
      <p>{match?.params.id} {message.message}</p>
    </RightDrawer>
  );
}
