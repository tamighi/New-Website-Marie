import { useForm } from "library";
import { Button } from "library/components/Button";
import { useDialog } from "../../library/providers";
import styles from "../styles/Page.css";

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
    <div className={styles.Page}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("test")} placeholder="Test input" />
        <textarea {...register("test2")} placeholder="Test input 2" />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
