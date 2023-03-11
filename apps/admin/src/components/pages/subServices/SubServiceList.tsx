import { Column } from "react-table";
import { isSubServiceArray, SubServiceDto } from ".";
import { MyDatagrid } from "../core";

const columns: Column<SubServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Type de texte", accessor: "textType" },
  { Header: "Prix", accessor: "pricePerCharacter" },
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
