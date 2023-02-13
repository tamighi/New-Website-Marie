import { Module } from "@nestjs/common"
import { ServiceCategoriesService } from "./serviceCategories.service"
import { ServiceCategoriesController } from "./serviceCategories.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ServiceCategory } from "./entities/serviceCategory.entity"

@Module({
  controllers: [ServiceCategoriesController],
  providers: [ServiceCategoriesService],
  imports: [TypeOrmModule.forFeature([ServiceCategory])],
})
export class ServiceCategoriesModule {}
