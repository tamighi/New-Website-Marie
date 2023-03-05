import { ICredentials } from "admin/api/authProvider";
import TextInput from "admin/components/inputs/TextInput";
import { useAuth } from "admin/hooks/useAuth";
import { Card, useForm } from "lib";

import styles from "./LoginPage.css";

export const LoginPage = () => {
  const { handleSubmit, register, reset } = useForm<ICredentials>();
  const { login } = useAuth();

  const onSubmit = async (credentials: Partial<ICredentials>) => {
    try {
      await login(credentials as ICredentials);
    } catch {
      reset();
    }
  };

  return (
    <div className={styles.LoginPage}>
      <Card>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput {...register("username")} placeholder="Identifier" />
          <TextInput {...register("password")} placeholder="Password" />
          <input type="submit" />
        </form>
      </Card>
    </div>
  );
};
