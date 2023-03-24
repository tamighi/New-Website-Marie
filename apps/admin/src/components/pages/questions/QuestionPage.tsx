import { Header, MainCard } from "../core";
import { QuestionList } from "./QuestionList";

export const QuestionPage = () => {
  return (
    <MainCard>
      <Header>
        <h3>Demandes d'information</h3>
      </Header>
      <QuestionList />
    </MainCard>
  );
};
