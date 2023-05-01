import { Title } from "components/typography/Title";
import { useService } from "hooks";
import { ArrowBackIcon, DataGrid, IconButton } from "lib";
import { useNavigate, useParams } from "react-router-dom";
import { Column } from "react-table";
import { SubServiceDto } from "types";

import typography from "../../typography/Typography.css";

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
        <ArrowBackIcon />
      </IconButton>
      <Title>{service.name}</Title>
      <p className={typography.Paragraph}>{service.description}</p>
      {service.subServices && (
        <DataGrid columns={columns} data={service.subServices} />
      )}
    </>
  );
};
