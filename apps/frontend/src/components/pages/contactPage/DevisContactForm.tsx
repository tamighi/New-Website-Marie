import { Loader } from "components/utils/Loader";
import { usePostMessage } from "hooks/usePostMessage";
import { useServices } from "hooks/useServices";
import { Button, Input, Select, TextArea, useForm } from "lib";
import { FormContent } from "../core/FormContent";
import { DevisDto } from "./devis";

export const DevisContactForm = () => {
  const { register, handleSubmit, reset } = useForm<DevisDto>();
  const { mutate, isLoading, isError, isSuccess } =
    usePostMessage<DevisDto>("devis");

  // TODO: Add select input (lib)
  const services = useServices();

  const onSubmit = (devis: Partial<DevisDto>) => {
    mutate(devis, {
      onSuccess: reset,
    });
    console.log(devis);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <p>
          Formulaire de demande de devis
          <br />
          Combien coûte la correction de votre texte ? Écrivez-moi !
        </p>
        <Input flex {...register("name")} label="Nom" />
        <Input flex {...register("email")} label="Email" />
        <Input flex {...register("nbCharacter")} label="Nombre de caractère" />
        <Select flex {...register("service.id")} label="Service désiré">
          <option value="">Non spécifié</option>
          {services.data?.map((service) => {
            return (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            );
          })}
        </Select>
        <TextArea flex rows={12} {...register("message")} label="Message" />
        <div style={{ gap: "6px", display: "flex", alignItems: "flex-start" }}>
          <Button type="submit" variant="contained" disabled={isLoading}>
            Envoyer
          </Button>
          {isLoading && <Loader size="small" />}
          {isError && <div>Une erreur est survenue ...</div>}
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
