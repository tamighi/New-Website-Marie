import { matchPath, useLocation } from "react-router-dom";
import { ServiceEdit, ServiceList } from ".";
import { MainContent, SideContent, Toolbar } from "../core";

export const ServicePage = () => {
  const location = useLocation();
  const match = matchPath("/admin/services/:id", location.pathname);

  return (
    <>
      <MainContent>
      <Toolbar />
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
