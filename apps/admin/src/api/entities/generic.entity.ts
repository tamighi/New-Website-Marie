import { ResourceString, ResourceType } from "api/dataProvider";
import { DevisEntity } from "./devis.entity";
import { QuestionEntity } from "./question.entity";
import { ReviewEntity } from "./review.entity";
import { ServiceEntity } from "./service.entity";

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
