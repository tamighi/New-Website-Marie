import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { FileModule } from "../core";

import { DevisService } from "./devis.service";
import { Devis } from "./entities/devis.entity";
import { DevisController } from "./devis.controller";
import { MessagesService } from "../message/messages.service";
import { MulterConfigService } from "src/config";
import { MulterModule } from "@nestjs/platform-express";

@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
    TypeOrmModule.forFeature([Devis]),
    MessagesService,
    FileModule,
  ],
  providers: [DevisService],
  controllers: [DevisController],
})
export class DevisModule {}
