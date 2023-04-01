import {
  Controller,
} from "@nestjs/common";
import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";
import { DevisService } from "./devis.service";
import { MessagesController } from "../message/messages.controller";

@Controller("devis")
export class DevisController extends MessagesController<Devis, DevisDto> {
  constructor(private readonly devisService: DevisService) {
    super(devisService);
  }
}
