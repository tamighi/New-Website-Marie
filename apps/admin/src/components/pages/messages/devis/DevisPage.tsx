import { matchPath, useLocation } from "react-router-dom";
import { Header, MainCard } from "../../core";
import { DevisDrawer } from "./DevisDrawer";
import { DevisList } from "./DevisList";

export const DevisPage = () => {
  const location = useLocation();

  const match = matchPath("/devis/:id", location.pathname);

  return (
    <>
      <MainCard
        style={{
          marginRight: !!match ? "412px" : "12px",
          transition: "margin-right 225ms",
        }}
      >
        <Header>
          <h3>Demandes d'information</h3>
        </Header>
        <DevisList />
      </MainCard>
      <DevisDrawer />
    </>
  );
};
