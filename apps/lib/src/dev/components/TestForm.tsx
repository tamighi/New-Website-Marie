import { useForm } from "../../hooks";
import { useModal } from "../../providers";

interface Dto {
  test: string;
  test2: string;
  gender: string;
}

export const TestForm = () => {
  const { register, handleSubmit } = useForm<Dto>();
  const { showModal } = useModal();

  const onSubmit = (data: Dto) => {
    console.log(data);
    showModal?.({ content: "Test" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} placeholder="Test input" />
      <textarea {...register("test2")} placeholder="Test input 2" />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
};
