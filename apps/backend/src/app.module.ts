import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { TypeOrmConfigService } from "./config/typeorm/typeorm.service"
import { getEnvPath } from "./common/utils/envFinder.utils"
import { ServiceCategoriesModule } from "./models/serviceCategories/serviceCategories.module"

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`)

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ServiceCategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
