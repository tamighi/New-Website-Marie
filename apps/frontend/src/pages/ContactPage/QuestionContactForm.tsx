import { ApiErrorForm } from "components/errors/ApiErrorForm";
import { Loader } from "components/utils/Loader/Loader";
import { usePostMessage } from "hooks";
import { Button, Input, TextArea, useForm } from "lib";
import { QuestionDto } from "types";
import { FormContent } from "components";

const QuestionContactForm = () => {
  const { register, handleSubmit, reset } = useForm<QuestionDto>();
  const { mutate, isLoading, isError, isSuccess } =
    usePostMessage<QuestionDto>("question");

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

        <Input required flex {...register("name")} label="Nom" />
        <Input required flex {...register("email")} label="Email" />

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

export default QuestionContactForm;
