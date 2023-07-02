import { Module } from "@nestjs/common";

import { AppConfigModule } from "./config/app/config.module";
import { TypeOrmConfigModule } from "./config/typeorm/typeorm.module";
import { FileModule } from "./models/core";
import { AuthModule } from "./auth";
import { InvalidatedAuthTokenModule } from "./models/core/invalidatedAuthToken/invalidatedAuthToken.module";

import { ServicesModule } from "./models/service/services.module";
import { UsersModule } from "./models/user/users.module";
import { SubServicesModule } from "./models/subService/subServices.module";
import { QuestionsModule } from "./models/question/questions.module";
import { DevisModule } from "./models/devis/devis.module";
import { ReviewsModule } from "./models/review/reviews.module";

@Module({
  imports: [
    AppConfigModule,
    TypeOrmConfigModule,
    FileModule,
    AuthModule,
    InvalidatedAuthTokenModule,
    UsersModule,
    ServicesModule,
    SubServicesModule,
    QuestionsModule,
    DevisModule,
    ReviewsModule,
  ],
})
export class AppModule {}
