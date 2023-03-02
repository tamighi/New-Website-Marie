import {
  Body,
  Delete,
  Get,
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
      const data: DTO = await this.abstractService.getOneById(id);
      return { data: data };
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
      const data: DTO = await this.abstractService.updateOne(id, body);
      return { data: data };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Put()
  async updateMany(@Body() body: DTO[], @Query() query: QueryDto) {
    try {
      const data: DTO[] = await this.abstractService.updateMany(body, query);
      return { data: data };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  async create(@Body() body: DTO) {
    try {
      const data = await this.abstractService.create(body);
      return { data: data };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete("/:id")
  async deleteOne(@Param() id: { id: number }) {
    try {
      const data = await this.abstractService.deleteOne(id);
      return { data: data.raw };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete()
  async deleteMany(@Query() query: QueryDto) {
    try {
      const data = await this.abstractService.deleteMany(query);
      return { data: data.raw };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
