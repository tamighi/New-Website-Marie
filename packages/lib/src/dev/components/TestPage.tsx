import { Button, Card, Input, Select, useForm } from "../../library";
import styles from "../styles/Page.css";

interface User {
  post: {
    id: 1;
  };
  name: string;
}

export const TestPage = () => {
  const { register, handleSubmit } = useForm<User>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.Page}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: "500px",
            height: "500px",
          }}
        >
          <Input label="name" {...register("name")} />
          <Select flex label="Service" {...register("post.id")}>
            <option value="">None</option>
            <option value={1}>Test1</option>
            <option value={2}>Test2</option>
          </Select>
        </Card>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
