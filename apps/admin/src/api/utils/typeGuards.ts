export const hasCount = (obj: unknown): obj is { count: number } => {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "count" in obj &&
    typeof obj.count === "number"
  );
};

const hasId = (obj: unknown): obj is { id: number | string } => {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "id" in obj &&
    (typeof obj.id === "number" || typeof obj.id === "string")
  );
};

export const hasDataObject = (
  obj: unknown
): obj is { data: { id: number | string } } => {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "data" in obj &&
    typeof obj.data === "object" &&
    hasId(obj.data)
  );
};

export const hasDataArray = (
  obj: unknown
): obj is { data: { id: number | string }[] } => {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "data" in obj &&
    obj.data instanceof Array &&
    obj.data.every((obj) => hasId(obj))
  );
};

export const isGeneric = <T extends object>(
  obj: unknown,
  generic: T
): obj is T => {
  if (!obj) {
    return false;
  }
  const objKeys = Object.keys(obj);
  return Object.keys(generic).every((key) => {
    const k = key as keyof T;
    if (!objKeys.includes(key) || typeof (obj as T)[k] !== typeof generic[k]) {
      return false;
    }
    return true;
  });
};

export const isGenericArray = <T extends object>(
  arr: unknown,
  generic: T
): arr is T[] => {
  if (!(arr instanceof Array)) {
    return false;
  }
  return arr.every((elem) => {
    return isGeneric(elem, generic);
  });
};
