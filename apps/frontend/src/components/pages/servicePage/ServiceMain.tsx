import { useServices } from "hooks/useServices";
import { ServiceCard } from "./ServiceCard";

export const ServiceMain = () => {
  const { data: services } = useServices();

  return (
    <>
      <h2>Les services proposés ...</h2>
      <p>Click on a service to see the details and the price.</p>
      {services?.map((service) => (
        <ServiceCard service={service} key={service.id} />
      ))}
    </>
  );
};
