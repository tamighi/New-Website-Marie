import { matchPath, useLocation } from "react-router-dom";
import { MessageDrawer } from "../common/MessageDrawer";
import { DevisCard } from "./DevisCard";
import { DevisDetails } from "./DevisDetails";

export const DevisPage = () => {
  const location = useLocation();

  const match = matchPath("/devis/:id", location.pathname);

  return (
    <>
      <DevisCard openDrawer={!!match}/>
      <MessageDrawer open={!!match}>
        {!!match && <DevisDetails id={match.params.id as string} />}
      </MessageDrawer>
    </>
  );
};
