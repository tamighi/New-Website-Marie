import { isGeneric } from "utils";
import { AbstractTypeGuard } from "./abstract.entity";

export interface SubServiceDto {
  id: number;
  textType: string;
  pricePerCharacter: number;
}

export interface ServiceDto {
  id: number;
  name: string;
  description: string;
  subServices?: SubServiceDto[];
}

export const serviceDto: ServiceDto = {
  id: 1,
  name: "",
  description: "",
};

const subServiceDto: SubServiceDto = {
  id: 1,
  textType: "",
  pricePerCharacter: 1,
};

export class ServiceEntity extends AbstractTypeGuard<ServiceDto> {
  private readonly subService: SubServiceDto;

  constructor() {
    super(serviceDto);
    this.subService = subServiceDto;
  }

  isSubServiceDtoArray(obj: unknown): obj is SubServiceDto {
    if (!(obj instanceof Array)) {
      return false;
    }
    return obj.every((elem) => {
      return isGeneric(elem, this.subService);
    });
  };

  override isGeneric(obj: unknown): obj is ServiceDto {
    const isService = super.isGeneric(obj);
    if (obj !== null && typeof obj === "object" && "subServices" in obj) {
      return isService && this.isSubServiceDtoArray(obj.subServices);
    }
    return isService;
  };
}
