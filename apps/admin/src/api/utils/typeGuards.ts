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
