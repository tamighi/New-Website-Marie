import { useServices } from "hooks/useServices";
import { ServiceCard } from "./ServiceCard";

export const ServiceMain = () => {
  const { data: services } = useServices();

  return (
    <>
      <h2>Les services proposés ...</h2>
      <p>
        Avoir recours à un service de relecture-correction implique
        naturellement d’y consacrer un budget. Vous pourrez cependant vite
        constater que cette dépense est minime, au regard du travail induit et
        des garanties de qualité apportées. En résumé, s’adjoindre un tel
        service, c’est se donner les moyens de bonifier un document à peu de
        frais, avec un maximum de valeur-ajoutée. Bref, vous ne le
        regretterez-pas ! Vous hésitez encore ? Demandez un test de correction,
        vous pourrez ainsi voir concrètement ce que cela peut vous apporter. À
        moins que vous cherchiez plutôt à être accompagné(e) dans vos efforts
        d’écriture.
        <br/>
        <br/>
        Clickez sur un service afin de voir les tarifs proposés.
      </p>
      {services?.map((service) => (
        <ServiceCard service={service} key={service.id} />
      ))}
    </>
  );
};
