import { ApiErrorForm } from "components/errors/ApiErrorForm";
import { Loader } from "components/utils/Loader";
import Rating from "components/utils/Rating";
import { usePostMessage } from "hooks/usePostMessage";
import { Button, Input, TextArea, useForm } from "lib";
import { FormContent } from "../core/FormContent";
import { ReviewDto } from "./review";

export const ReviewContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ReviewDto>();
  const { mutate, isLoading, isError, isSuccess } =
    usePostMessage<ReviewDto>("review");

  const onSubmit = (review: Partial<ReviewDto>) => {
    mutate(review, { onSuccess: reset });
    console.log(review);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Input required flex {...register("name")} label="Nom" />
        <Input required flex {...register("email", {onChange:() => {}})} label="Email" />
        <Rating required {...register("note", { onChange: () => {} })} />

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
