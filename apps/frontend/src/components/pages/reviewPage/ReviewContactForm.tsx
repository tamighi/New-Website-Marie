import { usePostMessage } from "hooks/usePostMessage";
import { Button, Input, TextArea, useForm } from "lib";
import { FormContent } from "../core/FormContent";
import { ReviewDto } from "./review";

export const ReviewContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ReviewDto>();
  const { mutate } = usePostMessage<ReviewDto>("review");

  const onSubmit = (devis: Partial<ReviewDto>) => {
    mutate(devis);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Input flex {...register("name")} placeholder="Nom" />
        <Input flex {...register("email")} placeholder="Email" />
        <TextArea
          flex
          rows={12}
          {...register("message")}
          placeholder="Message"
        />
        <Button type="submit" variant="contained">
          Envoyer
        </Button>
      </FormContent>
    </form>
  );
};
