import { Transform } from "class-transformer"
import { IsArray, IsObject, IsOptional } from "class-validator"
import {
  parseRange,
  parseSort,
  parseFilter,
} from "src/models/abstract/helper/queryCast.helper"

export class QueryDto {
  @Transform(({ value }) => parseFilter(value))
  @IsObject()
  @IsOptional()
  filter?: any

  @Transform(({ value }) => parseSort(value))
  @IsObject()
  @IsOptional()
  sort?: any

  @Transform(({ value }) => parseRange(value))
  @IsArray()
  @IsOptional()
  range?: number[]
}
