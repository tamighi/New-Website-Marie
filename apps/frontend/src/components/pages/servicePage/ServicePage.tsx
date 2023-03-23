import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { useServices } from "hooks/useServices";
import { Card, Paper } from "lib";
import { ServiceCard } from "./ServiceCard";

export const ServicePage = () => {
  const services = useServices();

  return (
    <CenteredPage>
      <Paper>
        <h2>Les services proposés ...</h2>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        {services?.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </Paper>
    </CenteredPage>
  );
};
