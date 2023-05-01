import { postMessage } from "api";
import { useMutation } from "react-query";
import { MessageDto } from "types";

const usePostMessage = <T extends MessageDto>(
  resource: "question" | "devis" | "review"
) => {
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    (question: Partial<T>) => postMessage(question, resource)
  );
  return { mutate, isError, isLoading, isSuccess };
};

export default usePostMessage;
