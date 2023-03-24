import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { Input, TextArea, useForm } from "lib";
import { QuestionDto } from "./questions";

export const ContactPage = () => {
  const { register, handleSubmit } = useForm<QuestionDto>();

  return (
    <CenteredPage>
      <h2>Contact</h2>
      <p>Formulaire</p>
      <form>
        <Input {...register("name")} placeholder="Nom" />
        <Input {...register("email")} placeholder="Email" />
        <TextArea {...register("message")} placeholder="Message" />
      </form>
    </CenteredPage>
  );
};
