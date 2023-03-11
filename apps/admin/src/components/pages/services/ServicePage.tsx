import { Drawer, Toolbar } from "lib";
import { matchPath, useLocation } from "react-router-dom";
import { ServiceEdit, ServiceList } from ".";
import { MainContainer } from "../core";
import { AddButton } from "../core/Buttons";

export const ServicePage = () => {
  const location = useLocation();
  const match = matchPath("/services/:id", location.pathname);

  return (
    <>
      <MainContainer
        style={{
          marginRight: !!match ? "252px" : "12px",
          transition: "margin-right 225ms",
        }}
      >
        <Toolbar style={{ justifyContent: "flex-end" }}>
          <AddButton />
        </Toolbar>
        <ServiceList />
      </MainContainer>
      <Drawer
        open={!!match}
        variant="persistent"
        anchor="right"
        style={{ width: "240px", height: "fit-content" }}
      >
        {match && match.params.id && <ServiceEdit id={match.params.id} />}
      </Drawer>
    </>
  );
};
