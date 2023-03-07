import { matchPath, useLocation } from "react-router-dom";
import { Column } from "react-table";
import { isServiceArray, ServiceDto, ServiceEdit } from ".";
import { MainContent, MyDatagrid, Toolbar } from "../core";
import { SuspenseWrapper } from "../core/SuspenseWrapper";

const columns: Column<ServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const ServiceList = () => {
  const location = useLocation();
  const match = matchPath("/admin/services/:id", location.pathname);

  return (
    <>
      <MainContent>
        <Toolbar />
        <SuspenseWrapper>
          <MyDatagrid
            ressource="service"
            columns={columns}
            isTArray={isServiceArray}
          />
        </SuspenseWrapper>
      </MainContent>
      {match && match.params.id && (
        <SuspenseWrapper>
          <ServiceEdit id={match.params.id} />
        </SuspenseWrapper>
      )}
    </>
  );
};
