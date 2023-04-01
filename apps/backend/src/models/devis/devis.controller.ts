import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { AbstractController } from "src/models/abstract/abstract.controller";
import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";
import { DevisService } from "./devis.service";

@Controller("devis")
export class DevisController extends AbstractController<Devis, DevisDto> {
  constructor(private readonly devisService: DevisService) {
    super(devisService);
  }

  @Post("postDevis")
  async postDevis(@Body() body: any) {
    try {
      return await this.devisService.postDevis(body);
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
