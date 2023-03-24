import { useService } from "hooks/useService";
import { Card, CloseIcon, IconButton } from "lib";
import { useNavigate } from "react-router-dom";

export const ServiceDetails = ({ id }: { id: string }) => {
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
      <Card style={{ height: "100%", width: "100%", boxSizing: "border-box" }}>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </Card>
    </>
  );
};
