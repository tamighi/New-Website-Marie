import { AbstractTypeGuard } from "api/types/abstract.entity";

export class TypeGuardSource<ResourceString extends string> {
  public entities: {
    [K in ResourceString]: AbstractTypeGuard<{ id: number | string }>;
  };

  constructor(register: {
    [k in ResourceString]: { id: number | string }
  }) {
    this.entities = {} as any;
    for (let k in register) {
      this.entities[k as ResourceString] = new AbstractTypeGuard(
        register[k]
      );
    }
  }

  isGenericArray<T>(
    obj: unknown,
    resource: ResourceString
  ): obj is T[] {
    return this.entities[resource].isGenericArray(obj);
  }
}
