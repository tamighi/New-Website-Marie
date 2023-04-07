import { Card, useStyles } from "lib";
import { useNavigate } from "react-router-dom";
import { ServiceDto } from "resources/service";

import styles from "./Service.css";

export const ServiceCard = ({ service }: { service: ServiceDto }) => {
  const navigate = useNavigate();
  const { color } = useStyles({ color: "secondary" });

  return (
    <Card
      className={styles.ServiceCard}
      onClick={() => navigate(`${service.id}`)}
      style={{
        transition: "transform .2s",
        border: `3px solid ${color}`,
      }}
    >
      <h3>{service.name}</h3>
      <p className={styles.DescriptionClamp}>{service.description}</p>
    </Card>
  );
};
