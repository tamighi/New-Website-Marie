import { Header } from "components/pages/core";
import { MessageCard } from "../common/MessageCard";
import { DevisList } from "./DevisList";

export const DevisCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
     <MessageCard openDrawer={openDrawer}>
      <Header>
        <h3>Demande de devis</h3>
      </Header>
      <DevisList />
    </MessageCard>
  );
};
