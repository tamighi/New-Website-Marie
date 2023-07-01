import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { FileModule } from "../core";

import { DevisService } from "./devis.service";
import { Devis } from "./entities/devis.entity";
import { DevisController } from "./devis.controller";
import { MessagesService } from "../message/messages.service";

@Module({
  providers: [DevisService],
  controllers: [DevisController],
  imports: [TypeOrmModule.forFeature([Devis]), MessagesService, FileModule],
})
export class DevisModule {}
