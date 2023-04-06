import { Header } from "components/pages/core";
import { MessageCard } from "../common/MessageCard";
import { QuestionList } from "./QuestionList";

export const QuestionCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
    <MessageCard openDrawer={openDrawer}>
      <Header>
        <h3>Demandes d'information</h3>
      </Header>
      <QuestionList />
    </MessageCard>
  );
};
