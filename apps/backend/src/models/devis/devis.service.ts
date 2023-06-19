import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FileService } from "../file/file.service";
import { MessagesService } from "../message/messages.service";
import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";

@Injectable()
export class DevisService extends MessagesService<Devis, DevisDto> {
  constructor(
    @InjectRepository(Devis)
    protected readonly devisRepository: Repository<Devis>,
    private readonly fileService: FileService
  ) {
    super(devisRepository);
  }

  override entityToDto(devis: Devis): DevisDto {
    const devisDto: DevisDto = super.entityToDto(devis);

    devisDto.service = devis.service;
    devisDto.subService = devis.subService;
    devisDto.nbCharacter = devis.nbCharacter;
    devisDto.endDate = devis.endDate;
    devisDto.file = devis.file;

    return devisDto;
  }

  async postMessageWithFile(
    body: DevisDto,
    file: Express.Multer.File
  ): Promise<{ data: DevisDto }> {
    const service = body.service?.id ? body.service : undefined;
    const subService = body.subService?.id ? body.subService : undefined;
    const endDate = body.endDate ? new Date(body.endDate) : undefined;

    const storedFile = await this.fileService.storeFilename(file);

    const correctBody = {
      ...body,
      service,
      subService,
      endDate,
      file: storedFile,
    };

    return super.postMessage(correctBody);
  }

  async getFile(fileId: number) {
    return this.fileService.getFile(fileId);
  }
}
