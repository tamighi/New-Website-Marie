import { RightDrawer } from "components/pages/core";

export interface MessageDrawerProps {
  children: React.ReactNode;
  open: boolean;
}

export const MessageDrawer = (props: MessageDrawerProps) => {
  const { open, children } = props;
  return <RightDrawer open={open}>{children}</RightDrawer>;
};
