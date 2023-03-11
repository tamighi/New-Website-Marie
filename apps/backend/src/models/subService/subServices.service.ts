import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AbstractService } from "src/models/abstract/abstract.service";
import { Repository } from "typeorm";
import { SubServiceDto } from "./dtos/subService.dto";
import { SubService } from "./entities/subService.entity";

@Injectable()
export class SubServicesService extends AbstractService<
  SubService,
  SubServiceDto
> {
  constructor(
    @InjectRepository(SubService)
    protected readonly subServiceRepository: Repository<SubService>
  ) {
    super(subServiceRepository);
  }

  entityToDto(subService: SubService): SubServiceDto {
    const subServiceDto: SubServiceDto = new SubServiceDto();

    subServiceDto.id = subService.id;
    subServiceDto.name = subService.name;
    subServiceDto.description = subService.description;

    return subServiceDto;
  }
}
