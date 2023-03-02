import { isArray } from "class-validator";
import { In } from "typeorm";

export function parseRange(param: string): number[] {
  return JSON.parse(param);
}

export function parseSort(param: string): any {
  const lst: string[] = JSON.parse(param);
  return Object.fromEntries([lst]);
}

export function parseFilter(param: string): any {
  const filter: { [key: string]: any } = {};

  Object.entries(JSON.parse(param)).forEach(
    ([key, value]: [key: string, value: any]) => {
      const idx = key.indexOf("_");
      if (isArray(value)) {
        value = In(value);
      }
      if (idx !== -1) {
        const subFilter: { [key: string]: any } = {};
        subFilter[key.substring(idx + 1)] = value;
        key = key.substring(0, idx);
        value = subFilter;
      }

      filter[key] = value;
    }
  );

  return filter;
}
