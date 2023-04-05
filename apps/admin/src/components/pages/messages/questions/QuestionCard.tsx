import { Header, MainCard } from "components/pages/core";
import { QuestionList } from "./QuestionList";

export const QuestionCard = ({ openDrawer }: { openDrawer: boolean }) => {
  return (
    <MainCard
      style={{
        marginRight: openDrawer ? "412px" : "12px",
        transition: "margin-right 225ms",
      }}
    >
      <Header>
        <h3>Demandes d'information</h3>
      </Header>
      <QuestionList />
    </MainCard>
  );
};
