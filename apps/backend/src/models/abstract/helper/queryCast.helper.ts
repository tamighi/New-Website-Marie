import { isArray } from "class-validator";
import { FindOptionsWhere, In } from "typeorm";

export function parseRange(param: string): number[] {
  return JSON.parse(param);
}

export function parseSort(param: string): object {
  const lst: string[] = JSON.parse(param);
  return Object.fromEntries([lst]);
}

export function parseFilter<T extends object>(
  param: string
): FindOptionsWhere<T> {
  const filter: FindOptionsWhere<T> = {};

  const obj: T = JSON.parse(param);

  for (let key in obj) {
    const idx = key.indexOf("_");
    let value: any = obj[key];
    if (isArray(value)) {
      value = In(value);
    }
    if (idx !== -1) {
      const subFilter: { [key: string]: unknown } = {};
      subFilter[key.substring(idx + 1)] = value;
      key = key.substring(0, idx) as Extract<keyof T, string>;
      value = subFilter;
    }
    filter[key] = value;
  }

  return filter;
}
