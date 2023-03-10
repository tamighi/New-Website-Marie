import { Transform } from "class-transformer";
import { IsArray, IsObject, IsOptional } from "class-validator";
import {
  parseRange,
  parseSort,
  parseFilter,
} from "src/models/abstract/helper/queryCast.helper";
import { FindOptionsWhere } from "typeorm";

export class QueryDto<T extends object> {
  @Transform(({ value }) => parseFilter(value))
  @IsObject()
  @IsOptional()
  filter?: FindOptionsWhere<T>

  @Transform(({ value }) => parseSort(value))
  @IsObject()
  @IsOptional()
  sort?: object;

  @Transform(({ value }) => parseRange(value))
  @IsArray()
  @IsOptional()
  range?: number[];
}
