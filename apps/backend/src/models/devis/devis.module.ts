import { Module } from "@nestjs/common";
import { DevisService } from "./devis.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Devis } from "./entities/devis.entity";
import { DevisController } from "./devis.controller";
import { MessagesService } from "../message/messages.service";
import { FileModule } from "../file/file.module";

@Module({
  providers: [DevisService],
  controllers: [DevisController],
  imports: [TypeOrmModule.forFeature([Devis]), MessagesService, FileModule],
})
export class DevisModule {}
