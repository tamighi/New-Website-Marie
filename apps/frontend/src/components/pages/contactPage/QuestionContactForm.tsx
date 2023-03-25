import { usePostQuestion } from "hooks/usePostQuestion";
import { Button, Input, TextArea, useForm } from "lib";
import { QuestionDto } from "./questions";

export const QuestionContactForm = () => {
  const { register, handleSubmit, reset } = useForm<QuestionDto>();
  const { mutate } = usePostQuestion();

  const onSubmit = (question: Partial<QuestionDto>) => {
    mutate(question);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} placeholder="Nom" />
      <Input {...register("email")} placeholder="Email" />
      <TextArea {...register("message")} placeholder="Message" />
      <Button type="submit"> Submit </Button>
    </form>
  );
};
