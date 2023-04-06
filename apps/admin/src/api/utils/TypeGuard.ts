import { ResourceString, ResourceType } from "api/types";

type NestedTypeGuardRegister<T extends object | undefined> = { instance: T } & {
  [K in keyof T]?: T[K];
};

export type TypeGuardRegister = {
  [K in ResourceString]:
    | ResourceType<K>
    | NestedTypeGuardRegister<ResourceType<K>>;
};

export class TypeGuard {
  private readonly typeObjects: TypeGuardRegister;

  // TODO: implement deep type safe guard
  constructor(typeObjects: TypeGuardRegister) {
    this.typeObjects = typeObjects;
  }

  private checkTypeSafety<T extends object>(
    obj: unknown,
    generic: T
  ): obj is T {
    if (!obj) {
      return false;
    }
    const objKeys = Object.keys(obj);

    return Object.keys(generic).every((key) => {
      const k = key as keyof T;
      if (
        !objKeys.includes(key) ||
        typeof (obj as any)[k] !== typeof (generic as any)[k]
      ) {
        return false;
      }
      return true;
    });
  }

  isGeneric<R extends ResourceString>(
    obj: unknown,
    resource: ResourceString
  ): obj is ResourceType<R> {
    const typeObject = (this.typeObjects as any)[resource];

    let instance: object;
    if ("instance" in typeObject) {
      instance = typeObject.instance;
    } else {
      instance = typeObject;
    }
    return this.checkTypeSafety(obj, instance);
  }

  isGenericArray<R extends ResourceString>(
    obj: unknown,
    resource: ResourceString
  ): obj is ResourceType<R>[] {
    const typeObject = (this.typeObjects as any)[resource];

    let instance: object;
    if ("instance" in typeObject) {
      instance = typeObject.instance;
    } else {
      instance = typeObject;
    }

    if (!(obj instanceof Array)) {
      return false;
    }
    if (obj[0]) {
      return this.checkTypeSafety(obj[0], instance); // Check only one instance
    }
    return true;
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
