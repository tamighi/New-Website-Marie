import { postQuestion } from "api/api";
import { QuestionDto } from "components/pages/contactPage/questions";
import { useMutation } from "react-query";

export const usePostQuestion = () => {
  const { mutate } = useMutation((question: Partial<QuestionDto>) =>
    postQuestion(question)
  );
  return { mutate };
};
