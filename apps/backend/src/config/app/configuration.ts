import { registerAs } from "@nestjs/config";

export default registerAs("app", () => ({
  db_host: process.env.POSTGRES_HOST,
  db_port: process.env.POSTGRES_PORT,
  db_name: process.env.POSTGRES_DB,
  db_username: process.env.POSTGRES_USER,
  db_password: process.env.POSTGRES_PASSWORD,
  default_user_id: process.env.DEFAULT_USER_ID,
  default_user_pwd: process.env.DEFAULT_USER_PWD,
  jwt_secret: process.env.JWT_SECRET,
}));
