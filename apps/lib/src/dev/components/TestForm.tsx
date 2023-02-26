import { useForm } from "../../hooks/useForm";

export const TestForm = () => {
  const { register, onSubmit} = useForm();
  return (
    <form onSubmit={onSubmit}>
      <input {...register("test")} placeholder="Test input" />
      <input type="submit" />
    </form>
  );
};
