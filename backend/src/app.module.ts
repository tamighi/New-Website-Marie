import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { getEnvPath } from "./common/utils/envFinder.utils"

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`)

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
