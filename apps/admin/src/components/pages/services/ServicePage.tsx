import { Card, Drawer, Toolbar } from "lib";
import { matchPath, useLocation } from "react-router-dom";
import { ServiceEdit, ServiceList } from ".";
import { AddButton } from "../core/Buttons";

export const ServicePage = () => {
  const location = useLocation();
  const match = matchPath("/services/:id", location.pathname);

  return (
    <>
      <Card
        style={{
          flexGrow: 1,
          marginRight: !!match ? "252px" : "12px",
          marginLeft: "12px",
          transition: "margin-right 225ms",
        }}
      >
        <Toolbar style={{ justifyContent: "flex-end" }}>
          <AddButton />
        </Toolbar>
        <ServiceList />
      </Card>
      <Drawer
        open={!!match}
        variant="persistent"
        anchor="right"
        style={{ width: "240px" }}
      >
        {match && match.params.id && <ServiceEdit id={match.params.id} />}
      </Drawer>
    </>
  );
};
