import { Card } from "lib";
import { useNavigate } from "react-router-dom";
import { ServiceDto } from "resources/service";

import styles from "./Service.css";

export const ServiceCard = ({ service }: { service: ServiceDto }) => {
  const navigate = useNavigate();

  return (
    <Card
      className={styles.ServiceCard}
      onClick={() => navigate(`${service.id}`)}
    >
      <h3>{service.name}</h3>
      <p className={styles.DescriptionClamp}>{service.description}</p>
    </Card>
  );
};
