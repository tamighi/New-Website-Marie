import { isGeneric } from "api/utils";

export class AbstractEntity<T extends { id: number }> {
  protected readonly entity: T;

  constructor(entity: T) {
    this.entity = entity;
  }

  isGeneric(obj: unknown): obj is T {
    return isGeneric(obj, this.entity);
  };

  isGenericArray(obj: unknown): obj is T[] {
    if (!(obj instanceof Array)) {
      return false;
    }
    return obj.every((elem) => {
      return this.isGeneric(elem);
    });
  };

  getEntity() {
    return this.entity;
  }
}
