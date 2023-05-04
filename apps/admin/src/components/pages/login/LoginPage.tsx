import { ICredentials } from "services/auth";
import { useAuth } from "hooks/useAuth";
import { Card, Input, useForm } from "lib";

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
          <Input {...register("username")} placeholder="Identifier" />
          <Input {...register("password")} placeholder="Password" />
          <input type="submit" />
        </form>
      </Card>
    </div>
  );
};
