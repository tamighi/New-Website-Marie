import { usePostMessage } from "hooks/usePostMessage";
import { Button, Input, TextArea, useForm } from "lib";
import { FormContent } from "../core/FormContent";
import { DevisDto } from "./devis";

export const DevisContactForm = () => {
  const { register, handleSubmit, reset } = useForm<DevisDto>();
  const { mutate } = usePostMessage<DevisDto>("devis");

  const onSubmit = (devis: Partial<DevisDto>) => {
    mutate(devis);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <p>
          Formulaire de demande de devis
          <br />
          Combien coûte la correction de votre texte ? Écrivez-moi !{" "}
        </p>
        <Input flex {...register("name")} placeholder="Nom" />
        <Input flex {...register("email")} placeholder="Email" />
        <TextArea
          flex
          rows={12}
          {...register("message")}
          placeholder="Message"
        />
      </FormContent>
      <Button type="submit"> Submit </Button>
    </form>
  );
};
