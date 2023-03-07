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
