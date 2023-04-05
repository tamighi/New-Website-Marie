import { DevisDto, DevisEntity } from "./devis.entity";
import { QuestionDto, QuestionEntity } from "./question.entity";
import { ReviewDto, ReviewEntity } from "./review.entity";
import { ServiceDto, ServiceEntity } from "./service.entity";

type Type = {
  service: ServiceDto;
  question: QuestionDto;
  review: ReviewDto;
  devis: DevisDto;
};

export type ResourceString = "service" | "question" | "review" | "devis";

export type ResourceType<R extends ResourceString> = Type[R]

const entities = {
  service: new ServiceEntity(),
  question: new QuestionEntity(),
  review: new ReviewEntity(),
  devis: new DevisEntity(),
};

export class GenericEntity<R extends ResourceString> {
  public readonly entity: any;
  constructor(resource: ResourceString) {
    this.entity = entities[resource];
  }

  isGenericArray(obj: unknown): obj is ResourceType<R>[] {
    return !!obj;
  }
}
