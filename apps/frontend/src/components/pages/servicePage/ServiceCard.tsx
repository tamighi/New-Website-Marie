import { Card, useStyles } from "lib";
import { useNavigate } from "react-router-dom";
import { ServiceDto } from "resources/service";

import styles from "./Service.css";

//TODO: lib: Accessing color more easily (useGetColor("type"))
export const ServiceCard = ({ service }: { service: ServiceDto }) => {
  const navigate = useNavigate();
  const themeStyle = useStyles({ color: "secondary" });

  return (
    <Card
      className={styles.ServiceCard}
      onClick={() => navigate(`${service.id}`)}
      style={{
        transition: "transform .2s",
        border: `3px solid ${themeStyle.color}`,
      }}
    >
      <h3>{service.name}</h3>
      <p className={styles.DescriptionClamp}>{service.description}</p>
    </Card>
  );
};
