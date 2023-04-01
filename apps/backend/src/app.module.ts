import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./config/typeorm/typeorm.service";
import { getEnvPath } from "./common/utils/envFinder.utils";

import { ServicesModule } from "./models/service/services.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./models/user/users.module";
import { SubServicesModule } from "./models/subService/subServices.module";
import { QuestionsModule } from "./models/question/questions.module";

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    AuthModule,
    UsersModule,
    ServicesModule,
    SubServicesModule,
    QuestionsModule,
  ],
})
export class AppModule {}
