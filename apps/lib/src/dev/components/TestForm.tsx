import { useForm } from "../../hooks/useForm";

interface Dto {
  test: string;
  test2: string;
}

export const TestForm = () => {
  const { register, handleSubmit } = useForm<Dto>();

  const onSubmit = (data: Dto) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} placeholder="Test input" />
      <textarea {...register("test2")} placeholder="Test input 2" />
      <input type="submit" />
    </form>
  );
};
