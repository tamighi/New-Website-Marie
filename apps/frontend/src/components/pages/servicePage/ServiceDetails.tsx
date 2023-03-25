import { useService } from "hooks/useService";
import { CloseIcon, DataGrid, IconButton } from "lib";
import { useNavigate, useParams } from "react-router-dom";
import { Column } from "react-table";
import { SubServiceDto } from "resources/service";

const columns: Column<SubServiceDto>[] = [
  {
    accessor: "textType",
    Header: "Type de texte",
  },
  {
    accessor: "pricePerCharacter",
    Header: "Prix par caractere",
  },
];

export const ServiceDetails = () => {
  const { id } = useParams() as { id: string };
  const { data: service } = useService(id);
  const navigate = useNavigate();

  if (!service) {
    return null;
  }
  return (
    <>
      <IconButton onClick={() => navigate("/services")}>
        <CloseIcon />
      </IconButton>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      {service.subServices && (
        <DataGrid columns={columns} data={service.subServices} />
      )}
    </>
  );
};
