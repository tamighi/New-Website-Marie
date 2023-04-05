import { Header, MainCard } from "components/pages/core";
import { DevisList } from "./DevisList";

export const DevisCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
    <MainCard
      style={{
        marginRight: openDrawer ? "412px" : "12px",
        transition: "margin-right 225ms",
      }}
    >
      <Header>
        <h3>Demande de devis</h3>
      </Header>
      <DevisList />
    </MainCard>
  );
};
