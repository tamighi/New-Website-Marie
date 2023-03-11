import { matchPath, useLocation } from "react-router-dom";
import { ServiceEdit, ServiceList } from ".";
import { AddButton, Header, MainCard, RightDrawer } from "../core";

export const ServicePage = () => {
  const location = useLocation();
  const match = matchPath("/services/:id", location.pathname);

  return (
    <>
      <MainCard
        style={{
          marginRight: !!match ? "252px" : "12px",
          transition: "margin-right 225ms",
        }}
      >
        <Header>
          <h3>Tous les services</h3>
          <div style={{ flexGrow: 1 }} />
          <AddButton />
        </Header>
        <ServiceList />
      </MainCard>
      <RightDrawer open={!!match}>
        {match && match.params.id && <ServiceEdit id={match.params.id} />}
      </RightDrawer>
    </>
  );
};
