import { useForm } from "../../hooks/useForm";

interface Dto {
  test: string;
  test2: string;
}

export const TestForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = <Dto,>(data: Dto) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} placeholder="Test input" />
      <input {...register("test2")} placeholder="Test input 2" />
      <input type="submit" />
    </form>
  );
};
