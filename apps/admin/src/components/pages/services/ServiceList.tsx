import { isServiceArray, ServiceDto } from ".";
import { CardLayout, Row } from "../core/content/CardLayout";

const columns: Row<ServiceDto>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Description", accessor: "description" },
  {
    Header: "Services",
    accessor: "subServices",
    Cell: (data) => (
      <div>
        {data?.map((subService) => (
          <span key={subService.id}>{subService.textType}</span>
        ))}
      </div>
    ),
  },
];

export const ServiceList = () => {
  return (
    <CardLayout rows={columns} ressource="service" isTArray={isServiceArray} />
  );
};
