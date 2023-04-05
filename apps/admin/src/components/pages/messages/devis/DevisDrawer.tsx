import { RightDrawer } from "components/pages/core";
import { DevisDetails } from "./DevisDetails";

interface Match {
  open: true;
  id: number | string;
}

interface NoMatch {
  open: false;
  id: undefined;
}

export type DevisDrawerProps = Match | NoMatch

export const DevisDrawer = (props: DevisDrawerProps) => {
  const { open, id } = props
  return (
    <RightDrawer open={open}>
      {open && <DevisDetails id={id} />}
    </RightDrawer>
  );
};
