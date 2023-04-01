import { postMessage } from "api/api";
import { MessageDto } from "components/pages/contactPage/message";
import { useMutation } from "react-query";

export const usePostMessage = <T extends MessageDto>(resource: string) => {
  const { mutate } = useMutation((question: Partial<T>) =>
    postMessage(question, resource)
  );
  return { mutate };
};
