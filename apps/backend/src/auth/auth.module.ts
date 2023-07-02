import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

import { InvalidatedAuthTokenModule } from "src/models/core";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "src/models/user/users.module";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";
import { AppConfigModule } from "src/config/app/config.module";
import { AppConfigService } from "src/config/app/config.service";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      useFactory: async (appConfigService: AppConfigService) => {
        return {
          secret: appConfigService.jwt_secret,
          signOptions: { expiresIn: "1d" },
        };
      },
      inject: [AppConfigService],
    }),
    InvalidatedAuthTokenModule,
    AppConfigModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
