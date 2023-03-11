import { Toolbar } from "lib";
import { matchPath, useLocation } from "react-router-dom";
import { ServiceEdit, ServiceList } from ".";
import { AddButton, MainCard, RightDrawer } from "../core";

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
        <Toolbar style={{ justifyContent: "flex-end" }}>
          <AddButton />
        </Toolbar>
        <ServiceList />
      </MainCard>
      <RightDrawer open={!!match}>
        {match && match.params.id && <ServiceEdit id={match.params.id} />}
      </RightDrawer>
    </>
  );
};
