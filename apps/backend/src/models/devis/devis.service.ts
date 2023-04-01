import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MessagesService } from "../message/messages.service";
import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";

@Injectable()
export class DevisService extends MessagesService<Devis, DevisDto> {
  constructor(
    @InjectRepository(Devis)
    protected readonly devisRepository: Repository<Devis>
  ) {
    super(devisRepository);
  }

  override entityToDto(devis: Devis): DevisDto {
    const devisDto: DevisDto = super.entityToDto(devis);

    return devisDto;
  }
}
