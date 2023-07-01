import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./config/typeorm/typeorm.service";

import { FileModule } from "./models/core";
import { AuthModule } from "./auth";

import { ServicesModule } from "./models/service/services.module";
import { UsersModule } from "./models/user/users.module";
import { SubServicesModule } from "./models/subService/subServices.module";
import { QuestionsModule } from "./models/question/questions.module";
import { DevisModule } from "./models/devis/devis.module";
import { ReviewsModule } from "./models/review/reviews.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    FileModule,
    AuthModule,
    UsersModule,
    ServicesModule,
    SubServicesModule,
    QuestionsModule,
    DevisModule,
    ReviewsModule,
  ],
})
export class AppModule {}
