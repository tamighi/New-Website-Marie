import { ArrowBackIcon, DataGrid, IconButton } from "lib";

import { useService } from "hooks";
import { SubServiceDto } from "types";
import { EmptyData, Title } from "components";

import { useNavigate, useParams } from "react-router-dom";
import { Column } from "react-table";

import styles from "./Service.css";

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

const ServiceDetails = () => {
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
      <p className={styles.ServiceDescription}>{service.description}</p>
      {service.subServices && service.subServices.length !== 0 ? (
        <DataGrid columns={columns} data={service.subServices} />
      ) : (
        <EmptyData message="Ce service n'est pas encore détaillé" />
      )}
    </>
  );
};

export default ServiceDetails;
