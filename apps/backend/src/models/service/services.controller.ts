import { Controller, Get } from "@nestjs/common";
import { AbstractController } from "src/models/abstract/abstract.controller";
import { ServiceDto } from "./dtos/service.dto";
import { Service } from "./entities/service.entity";
import { ServicesService } from "./services.service";

@Controller("service")
export class ServicesController extends AbstractController<
  Service,
  ServiceDto
> {
  constructor(private readonly servicesService: ServicesService) {
    super(servicesService);
  }

  @Get("fetchServices")
  async fetchServices() {
    return this.servicesService.fetchServices();
  }
}
