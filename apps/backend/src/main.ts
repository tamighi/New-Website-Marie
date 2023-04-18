import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const envFilePath: string = `${__dirname}/../../../.env`;

require("dotenv").config({ path: envFilePath });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.setGlobalPrefix('api')

  await app.listen(8000);
}
bootstrap();
