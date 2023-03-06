export const hasCount = (obj: unknown): obj is { count: number } => {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "count" in obj &&
    typeof obj.count === "number"
  );
};

const isGeneric = <T extends object>(obj: unknown): obj is T => {
  if (!obj || !(obj === "object")) {
    return false;
  }
  return true;
};

export const hasDataObject = <T extends object>(
  obj: unknown
): obj is { data: T } => {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "data" in obj &&
    isGeneric(obj.data)
  );
};

const isGenericArray = <T extends object>(arr: unknown): arr is T[] => {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((elem) => {
    return isGeneric(elem);
  });
};

export const hasDataArray = <T extends object>(
  obj: unknown
): obj is { data: T[] } => {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "data" in obj &&
    isGenericArray(obj.data)
  );
};
