import { matchPath, useLocation } from "react-router-dom";
import { DevisCard } from "./DevisCard";
import { DevisDrawer, DevisDrawerProps } from "./DevisDrawer";

export const DevisPage = () => {
  const location = useLocation();

  const match = matchPath("/devis/:id", location.pathname);

  const devisDrawerProps: DevisDrawerProps = match
    ? { open: true, id: match.params.id as string }
    : { open: false, id: undefined };

  return (
    <>
      <DevisCard openDrawer={!!match}/>
      <DevisDrawer {...devisDrawerProps} />
    </>
  );
};
