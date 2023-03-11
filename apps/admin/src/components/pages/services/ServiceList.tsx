import { Column } from "react-table";
import { isServiceArray, ServiceDto } from ".";
import { MyDatagrid } from "../core";

const columns: Column<ServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
  {
    Header: "Services",
    accessor: "subServices",
    Cell: (data) => (
      <div>
        {data.value?.map((subService) => (
          <span key={subService.id}>{subService.textType}</span>
        ))}
      </div>
    ),
  },
];

export const ServiceList = () => {
  return (
    <MyDatagrid
      ressource="service"
      columns={columns}
      isTArray={isServiceArray}
    />
  );
};
