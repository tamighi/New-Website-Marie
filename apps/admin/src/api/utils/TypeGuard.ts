import { ResourceString, ResourceType } from "api/types";

type NestedTypeGuardRegister<T extends object | undefined> = { instance: T } & {
  [K in keyof T]?: T[K] extends object
    ? object | undefined
    : T[K] extends Array<object> | undefined
    ? T[K] | NestedTypeGuardRegister<T[K]>
    : never;
};

type TypeGuardObject<K extends ResourceString> =
  | ResourceType<K>
  | NestedTypeGuardRegister<ResourceType<K>>;

export type TypeGuardRegister = {
  [K in ResourceString]: TypeGuardObject<K>;
};

export class TypeGuard {
  private readonly typeObjects: TypeGuardRegister;

  constructor(typeObjects: TypeGuardRegister) {
    this.typeObjects = typeObjects;
  }

  isGeneric<R extends ResourceString>(
    obj: unknown,
    resource: ResourceString
  ): obj is ResourceType<R> {
    const instance = this.getInstance(resource);

    return this,this.checkTypeSafety(obj, instance)
  }

  isGenericArray<R extends ResourceString>(
    obj: unknown,
    resource: ResourceString
  ): obj is ResourceType<R>[] {
    if (!(obj instanceof Array)) {
      return false;
    }

    const instance = this.getInstance(resource); // Check only one instance

    return this.checkArray(obj, instance)
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

  public checkArray(obj: unknown, instance: object): boolean {
    if (!(obj instanceof Array)) {
      return false;
    }

    if (obj.length === 0) {
      return true
    }

    return this.checkTypeSafety(obj[0], instance)
  }

  private getInstance(resource: ResourceString) {
    const typeObject = this.typeObjects[resource];

    // TODO: Need to be possible to have an entity with instance in it ...
    if ("instance" in typeObject) {
      return typeObject.instance;
    } else {
      return typeObject;
    }
  }

  private checkTypeSafety(obj: unknown, generic: object): boolean {
    if (!obj) {
      return false;
    }
    const objKeys = Object.keys(obj);

    return Object.keys(generic).every((key) => {
      if (
        !objKeys.includes(key) ||
        typeof (obj as any)[key] !== typeof (generic as any)[key]
      ) {
        return false;
      }
      return true;
    });
  }
}
