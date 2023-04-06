export type TypeGuardRegister<R extends string> = {
  [K in R]: object;
}

export class TypeGuard<R extends string> {
  private readonly objs: TypeGuardRegister<R>;

  // TODO: implement deep type safe guard
  constructor(register: TypeGuardRegister<R>) {
    this.objs = register;
  }

  isGeneric<T>(obj: unknown, resource: R): obj is T {
    if (!obj) {
      return false;
    }
    const objKeys = Object.keys(obj);

    const generic = this.objs[resource];

    return Object.keys(generic).every((key) => {
      const k = key as R;
      if (
        !objKeys.includes(key) ||
        typeof (obj as any)[k] !== typeof (generic as any)[k]
      ) {
        return false;
      }
      return true;
    });
  }

  isGenericArray<T>(obj: unknown, resource: R): obj is T[] {
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
    return obj !== null && typeof obj === "object" && "data" in obj;
  };
}
