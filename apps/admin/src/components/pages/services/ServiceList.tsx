import { ServiceDto } from ".";
import { CardLayout, Row } from "../core/content/CardLayout";

const columns: Row<ServiceDto>[] = [
  { Header: "Nom du service", accessor: "name" },
  { Header: "Description du service", accessor: "description" },
  {
    Header: "Services",
    accessor: "subServices",
    Cell: (data) => (
      <>
        {data?.map((subService) => (
          <span key={subService.id}>{subService.textType} </span>
        ))}
      </>
    ),
  },
];

export const ServiceList = () => {
  return (
    <CardLayout rows={columns} resource="service"/>
  );
};
