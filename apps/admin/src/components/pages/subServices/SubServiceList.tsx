import { Column } from "react-table";
import { isSubServiceArray, SubServiceDto } from ".";
import { MyDatagrid } from "../core";

const columns: Column<SubServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
];

export const SubServiceList = () => {
  return (
    <MyDatagrid
      ressource="subService"
      columns={columns}
      isTArray={isSubServiceArray}
    />
  );
};
