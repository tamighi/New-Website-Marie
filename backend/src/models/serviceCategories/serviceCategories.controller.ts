import { Controller } from "@nestjs/common"
import { AbstractController } from "src/models/abstract/abstract.controller"
import { ServiceCategoryDto } from "./dtos/serviceCategory.dto"
import { ServiceCategory } from "./entities/serviceCategory.entity"
import { ServiceCategoriesService } from "./serviceCategories.service"

@Controller("serviceCategories")
export class ServiceCategoriesController extends AbstractController<
  ServiceCategory,
  ServiceCategoryDto
> {
  constructor(
    private readonly serviceCategoriesService: ServiceCategoriesService
  ) {
    super(serviceCategoriesService)
  }
}
