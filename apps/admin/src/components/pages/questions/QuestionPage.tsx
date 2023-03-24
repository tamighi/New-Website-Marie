import { matchPath, useLocation } from "react-router-dom";
import { Header, MainCard, RightDrawer } from "../core";
import { QuestionList } from "./QuestionList";

export const QuestionPage = () => {
  const location = useLocation();

  const match = matchPath("/questions/:id", location.pathname);

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
        <QuestionList />
      </MainCard>
      <RightDrawer open={!!match}>
        <p>{match?.params.id} Hello World</p>
      </RightDrawer>
    </>
  );
};
