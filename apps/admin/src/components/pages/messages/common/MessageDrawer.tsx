import { RightDrawer } from "components/pages/core";
import { ArrowForwardIcon, IconButton } from "lib";
import { useNavigate } from "react-router-dom";

export interface MessageDrawerProps {
  children: React.ReactNode;
  open: boolean;
}

// TODO: Possible to expand right drawer ?
export const MessageDrawer = (props: MessageDrawerProps) => {
  const { open, children } = props;

  const navigate = useNavigate();

  return (
    <RightDrawer open={open}>
      <IconButton onClick={() => navigate("")}>
        <ArrowForwardIcon />
      </IconButton>
      {children}
    </RightDrawer>
  );
};
