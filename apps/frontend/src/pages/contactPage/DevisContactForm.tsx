import React from "react";

import { Loader } from "components/utils/Loader/Loader";
import { usePostMessage, useServices } from "hooks";
import { Button, Input, Select, TextArea, useForm } from "lib";
import { FormContent } from "../core/FormContent";
import { DevisDto, SubServiceDto } from "types";
import { ApiErrorForm } from "components/errors/ApiErrorForm";

import DatePicker from "components/utils/DatePicker/DatePicker";

const DevisContactForm = () => {
  const { register, handleSubmit, reset } = useForm<DevisDto>();
  const { mutate, isLoading, isError, isSuccess } =
    usePostMessage<DevisDto>("devis");
  const [serviceId, setServiceId] = React.useState("");
  const [subServices, setSubServices] = React.useState<SubServiceDto[]>();

  const services = useServices();

  React.useEffect(() => {
    const selectedService = services?.data?.find((service) => {
      return service.id == serviceId;
    });
    if (selectedService) {
      setSubServices(selectedService.subServices);
    } else {
      setSubServices(undefined);
    }
  }, [serviceId]);

  const onSubmit = (devis: Partial<DevisDto>) => {
    mutate(devis, {
      onSuccess: reset,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <p>
          Formulaire de demande de devis
          <br />
          Combien coûte la correction de votre texte ? Écrivez-moi !
        </p>

        <Input required flex {...register("name")} label="Nom" />
        <Input required flex {...register("email")} label="Email" />
        <Input
          required
          flex
          {...register("nbCharacter")}
          label="Nombre de caractère"
        />
        <DatePicker flex label="Delai" required {...register("endDate")} />

        <Select
          flex
          {...register("service.id", {
            onChange: (value) => setServiceId(value),
          })}
          label="Service désiré"
        >
          <option value="">Non spécifié</option>
          {services.data?.map((service) => {
            return (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            );
          })}
        </Select>

        {subServices ? (
          <Select flex {...register("subService.id")} label="Type de texte">
            <option value="">Non spécifié</option>
            {subServices.map((subService) => {
              return (
                <option key={subService.id} value={subService.id}>
                  {subService.textType}
                </option>
              );
            })}
          </Select>
        ) : null}

        <TextArea
          required
          flex
          rows={12}
          {...register("message")}
          label="Message"
        />

        <div style={{ gap: "6px", display: "flex", alignItems: "flex-start" }}>
          <Button type="submit" variant="contained" disabled={isLoading}>
            Envoyer
          </Button>
          {isLoading && <Loader size="small" />}
          {isError && <ApiErrorForm />}
        </div>

        {isSuccess && (
          <p>
            Votre message a bien été envoyé ! Je reviendrai vers vous dès que
            possible.
          </p>
        )}
      </FormContent>
    </form>
  );
};

export default DevisContactForm;
