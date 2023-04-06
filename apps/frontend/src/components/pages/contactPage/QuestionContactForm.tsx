import { usePostMessage } from "hooks/usePostMessage";
import { Button, Input, TextArea, useForm } from "lib";
import { FormContent } from "../core/FormContent";
import { QuestionDto } from "./questions";

export const QuestionContactForm = () => {
  const { register, handleSubmit, reset } = useForm<QuestionDto>();
  const { mutate } = usePostMessage<QuestionDto>("question");

  const onSubmit = (question: Partial<QuestionDto>) => {
    mutate(question);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <p>
          Formulaire de demande d'informations
          <br />
          Une information vous manque ? Un cas particulier ? Contactez-moi !
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
      <Button type="submit">Submit</Button>
    </form>
  );
};
