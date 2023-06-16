import { postFormData } from "api";
import { useMutation } from "react-query";

const usePostFormData = (resource: "question" | "devis" | "review") => {
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    (message: FormData) => postFormData(message, resource)
  );
  return { mutate, isError, isLoading, isSuccess };
};

export default usePostFormData;
