import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { useServices } from "hooks/useServices";
import { useParams } from "react-router-dom";
import { ServiceCard } from "./ServiceCard";
import { ServiceDetails } from "./ServiceDetails";

export const ServicePage = () => {
  const services = useServices();
  const { id } = useParams();

  return (
    <CenteredPage>
      <h2>Les services proposés ...</h2>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      {id ? (
        <ServiceDetails id={id} />
      ) : (
        services?.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))
      )}
    </CenteredPage>
  );
};
