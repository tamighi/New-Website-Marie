import { Column } from "react-table";
import { DataGridLayout } from "../core/Datagrid";
import { ServiceDto } from ".";

const columns: Column<ServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const ServiceList = () => {
  return <DataGridLayout ressource="service" columns={columns} />;
};
