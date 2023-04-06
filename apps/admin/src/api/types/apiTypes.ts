import { TypeGuardRegister } from "../utils";
import { devisDto } from "./devis";
import { questionDto } from "./question";
import { reviewDto } from "./review";
import { serviceDto, subServiceDto } from "./service";

type Types = {
  service: typeof serviceDto;
  subService: typeof subServiceDto;
  question: typeof questionDto;
  review: typeof reviewDto;
  devis: typeof devisDto;
};

export type ResourceString =
  | "service"
  | "subService"
  | "question"
  | "review"
  | "devis";

export type ResourceType<R extends ResourceString> = Types[R];

export const typeRegister: TypeGuardRegister = {
  review: reviewDto,
  devis: devisDto,
  service: { instance: serviceDto, subServices: subServiceDto },
  question: questionDto,
  subService: subServiceDto,
};

/* type TestArray<T extends object> = {
 [K in keyof T]?: T[K] extends string ? string : T[K] extends (infer U)[] | undefined ? U : never
}

const test: typeof serviceDto = {...serviceDto, subServices: [subServiceDto]}

export type Test = TestArray<typeof test> */
