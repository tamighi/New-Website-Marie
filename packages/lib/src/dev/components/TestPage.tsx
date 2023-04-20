import React from "react";
import { Button, Card, Input, Select, useForm } from "../../library";
import styles from "../styles/Page.css";

interface User {
  post: {
    id: 1;
    title: string;
  };
  name: string;
}

export const TestPage = () => {
  const { register, handleSubmit, reset } = useForm<User>();
  const [id, setId] = React.useState("");

  const onSubmit = (data: any) => {
    reset();
    console.log(data);
    console.log(id);
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
          <Input
            label="post title"
            {...register("post.title", { onChange: () => {} })}
          />
          <Select
            flex
            label="post"
            {...register("post.id", {
              onChange: (value: string) => setId(value),
            })}
            value={id}
          >
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
