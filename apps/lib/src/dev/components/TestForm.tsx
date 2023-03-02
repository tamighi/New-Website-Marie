import { useForm } from "../../hooks";
import { useDialog } from "../../providers";

interface Dto {
  test: string;
  test2: string;
  gender: string;
}

export const TestForm = () => {
  const { register, handleSubmit, reset } = useForm<Dto>();
  const { showDialog } = useDialog();

  const onSubmit = (data: Partial<Dto>) => {
    console.log(data);
    showDialog?.({ content: "Create user ?", okCallback: reset });
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
