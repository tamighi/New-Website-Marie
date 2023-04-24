import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "./config/typeorm/typeorm.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { ServicesModule } from "./models/service/services.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./models/user/users.module";
import { SubServicesModule } from "./models/subService/subServices.module";
import { QuestionsModule } from "./models/question/questions.module";
import { DevisModule } from "./models/devis/devis.module";
import { ReviewsModule } from "./models/review/reviews.module";

@Module({
  // TODO: serve static in nginx
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../..", "admin", "build"),
      serveRoot: "/admin",
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../..", "frontend", "build"),
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    AuthModule,
    UsersModule,
    ServicesModule,
    SubServicesModule,
    QuestionsModule,
    DevisModule,
    ReviewsModule,
  ],
})
export class AppModule { }
