import { Navbar } from "lib";
import { matchPath, useLocation } from "react-router-dom";
import { ServiceEdit, ServiceList } from ".";
import { MainContent, SideContent } from "../core";
import { AddButton } from "../core/Buttons";

export const ServicePage = () => {
  const location = useLocation();
  const match = matchPath("/admin/services/:id", location.pathname);

  return (
    <>
      <MainContent>
        <Navbar style={{ justifyContent: "flex-end" }}>
          <AddButton />
        </Navbar>
        <ServiceList />
      </MainContent>
      {match && match.params.id && (
        <SideContent>
          <ServiceEdit id={match.params.id} />
        </SideContent>
      )}
    </>
  );
};
