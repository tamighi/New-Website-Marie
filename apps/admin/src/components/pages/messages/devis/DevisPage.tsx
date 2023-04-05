import { matchPath, useLocation } from "react-router-dom";
import { DevisCard } from "./DevisCard";
import { DevisDrawer } from "./DevisDrawer";

export const DevisPage = () => {
  const location = useLocation();

  const match = matchPath("/devis/:id", location.pathname);

  return (
    <>
      <DevisCard openDrawer={!!match}/>
      <DevisDrawer />
    </>
  );
};
