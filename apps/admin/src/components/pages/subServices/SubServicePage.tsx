import { matchPath, useLocation } from "react-router-dom";
import { SubServiceEdit, SubServiceList } from ".";
import { CreateButton, Header, MainCard, RightDrawer } from "../core";

export const SubServicePage = () => {
  const location = useLocation();
  const match = matchPath("/subServices/:id", location.pathname);

  return (
    <>
      <MainCard
        style={{
          marginRight: !!match ? "252px" : "12px",
          transition: "margin-right 225ms",
        }}
      >
        <Header>
          <h3>Tous les sous-services</h3>
          <div style={{ flexGrow: 1 }} />
          <CreateButton />
        </Header>
        <SubServiceList />
      </MainCard>
      <RightDrawer open={!!match}>
        {match && match.params.id && <SubServiceEdit id={match.params.id} />}
      </RightDrawer>
    </>
  );
};
