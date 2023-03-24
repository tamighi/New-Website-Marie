import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { usePostQuestion } from "hooks/usePostQuestion";
import { Button, Input, TextArea, useForm } from "lib";
import { QuestionDto } from "./questions";

export const ContactPage = () => {
  const { register, handleSubmit } = useForm<QuestionDto>();
  const { mutate } = usePostQuestion();

  const onSubmit = (question: Partial<QuestionDto>) => {
    mutate(question);
  };

  return (
    <CenteredPage>
      <h2>Contact</h2>
      <p>Formulaire</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} placeholder="Nom" />
        <Input {...register("email")} placeholder="Email" />
        <TextArea {...register("message")} placeholder="Message" />
        <Button type="submit"> Submit </Button>
      </form>
    </CenteredPage>
  );
};
