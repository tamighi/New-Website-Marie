import { TypeGuardRegister } from "../utils";
import { devisDto } from "./devis";
import { questionDto } from "./question";
import { reviewDto } from "./review";
import { serviceDto, subServiceDto } from "./service";

export type ResourceString =
  | "service"
  | "question"
  | "review"
  | "devis"
  | "subService";

type Type = {
  service: typeof serviceDto;
  subService: typeof subServiceDto;
  question: typeof questionDto;
  review: typeof reviewDto;
  devis: typeof devisDto;
};

export type ResourceType<R extends ResourceString> = Type[R];

export const typeRegister: TypeGuardRegister<ResourceString> = {
  review: reviewDto,
  devis: devisDto,
  service: serviceDto,
  question: questionDto,
  subService: subServiceDto,
};
