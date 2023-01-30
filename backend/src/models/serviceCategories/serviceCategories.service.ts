import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { AbstractService } from "src/models/abstract/abstract.service"
import { Repository } from "typeorm"
import { ServiceCategoryDto } from "./dtos/serviceCategory.dto"
import { ServiceCategory } from "./entities/serviceCategory.entity"

@Injectable()
export class ServiceCategoriesService extends AbstractService<
  ServiceCategory,
  ServiceCategoryDto
> {
  constructor(
    @InjectRepository(ServiceCategory)
    protected readonly serviceCategoryRepository: Repository<ServiceCategory>
  ) {
    super(serviceCategoryRepository)
  }

  entityToDto(serviceCategory: ServiceCategory): ServiceCategoryDto {
    const serviceCategoryDto: ServiceCategoryDto = new ServiceCategoryDto()

    serviceCategoryDto.id = serviceCategory.id
    serviceCategoryDto.name = serviceCategory.name
    serviceCategoryDto.description = serviceCategory.description

    return serviceCategoryDto
  }
}
