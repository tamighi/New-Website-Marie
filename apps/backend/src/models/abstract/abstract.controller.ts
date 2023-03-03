import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { AbstractService } from "./abstract.service";
import { QueryDto } from "./dtos/query.dto";

export abstract class AbstractController<T extends { id: number }, DTO> {
  constructor(protected readonly abstractService: AbstractService<T, DTO>) {}

  @Get()
  async getList(
    @Query() query: QueryDto
  ): Promise<{ data: DTO[]; count: number }> {
    try {
      return this.abstractService.getList(query);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Get("/:id")
  async getOneById(@Param() id: { id: number }): Promise<{ data: DTO }> {
    try {
      return this.abstractService.getOneById(id);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Put("/:id")
  async updateOne(
    @Param() id: { id: number },
    @Body() body: DTO
  ): Promise<{ data: DTO }> {
    try {
      return this.abstractService.updateOne(id, body);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Put()
  async updateMany(
    @Body() body: DTO[],
    @Query() query: QueryDto
  ): Promise<{ data: DTO[] }> {
    try {
      return this.abstractService.updateMany(body, query);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  async create(@Body() body: DTO): Promise<{ data: DTO }> {
    try {
      return this.abstractService.create(body);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete("/:id")
  @HttpCode(204)
  async deleteOne(@Param() id: { id: number }) {
    try {
      this.abstractService.deleteOne(id);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete()
  @HttpCode(204)
  async deleteMany(@Query() query: QueryDto) {
    try {
      this.abstractService.deleteMany(query);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
