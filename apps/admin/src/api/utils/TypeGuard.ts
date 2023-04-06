export class TypeGuard<ResourceString extends string> {
  private readonly objs: { [K in ResourceString]: { id: number | string } };

  // TODO: implement deep type safe guard
  constructor(register: {
    [k in ResourceString]: { id: number | string };
  }) {
    this.objs = register;
  }

  isGeneric<T>(obj: unknown, resource: ResourceString): obj is T {
    if (!obj) {
      return false;
    }
    const objKeys = Object.keys(obj);

    const generic = this.objs[resource];

    return Object.keys(generic).every((key) => {
      const k = key as ResourceString;
      if (
        !objKeys.includes(key) ||
        typeof (obj as any)[k] !== typeof (generic as any)[k]
      ) {
        return false;
      }
      return true;
    });
  }

  isGenericArray<T>(obj: unknown, resource: ResourceString): obj is T[] {
    if (!(obj instanceof Array)) {
      return false;
    }
    return obj.every((elem) => {
      return this.isGeneric(elem, resource);
    });
  }

  hasCount = (obj: unknown): obj is { count: number } => {
    return (
      obj !== null &&
      typeof obj === "object" &&
      "count" in obj &&
      typeof obj.count === "number"
    );
  };

  hasData = (obj: unknown): obj is { data: object } => {
    return (
      obj !== null &&
      typeof obj === "object" &&
      "data" in obj
    );
  };
}
