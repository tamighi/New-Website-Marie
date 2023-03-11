import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AbstractService } from "src/models/abstract/abstract.service";
import { Repository } from "typeorm";
import { ServiceDto } from "./dtos/service.dto";
import { Service } from "./entities/service.entity";

@Injectable()
export class ServicesService extends AbstractService<Service, ServiceDto> {
  constructor(
    @InjectRepository(Service)
    protected readonly serviceRepository: Repository<Service>
  ) {
    super(serviceRepository);
  }

  entityToDto(service: Service): ServiceDto {
    const serviceDto: ServiceDto = new ServiceDto();

    serviceDto.id = service.id;
    serviceDto.name = service.name;
    serviceDto.description = service.description;
    serviceDto.subServices = service.subServices;

    return serviceDto;
  }
}
