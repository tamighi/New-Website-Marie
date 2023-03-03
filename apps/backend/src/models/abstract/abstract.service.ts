import {
  DeepPartial,
  DeleteResult,
  FindOptionsWhere,
  Repository,
} from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { QueryDto } from "./dtos/query.dto";

export abstract class AbstractService<T extends { id: number }, DTO> {
  protected repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  abstract entityToDto(entity: T): DTO;

  async getList(query: QueryDto): Promise<{ data: DTO[]; count: number }> {
    const [data, count]: [T[], number] = await this.repository.findAndCount({
      where: query.filter,
      ...(query.sort && { order: query.sort }),
      ...(query.range && {
        skip: query.range[0],
        take: query.range[1] - query.range[0] + 1,
      }),
    });
    return { data: data.map((x) => this.entityToDto(x)), count: count };
  }

  async getOneById(id: { id: number }): Promise<{ data: DTO }> {
    const data: T = await this.repository.findOne({
      where: id as FindOptionsWhere<T>,
    });

    return { data: this.entityToDto(data) };
  }

  async updateOne(id: { id: number }, body: DTO): Promise<{ data: DTO }> {
    const updateBody = body as QueryDeepPartialEntity<T>;

    await this.repository.update(id.id, updateBody);
    const data: T = await this.repository.findOne({
      where: id as FindOptionsWhere<T>,
    });

    return { data: this.entityToDto(data) };
  }

  async updateMany(body: DTO[], query: QueryDto): Promise<{ data: DTO[] }> {
    const updateBody = body as QueryDeepPartialEntity<T>;

    await this.repository.update(query.filter.id, updateBody);
    const data: T[] = await this.repository.find({
      where: query.filter,
    });
    return { data: data.map((x) => this.entityToDto(x)) };
  }

  async create(body: DTO) {
    const updateBody = body as DeepPartial<T>;

    const newData: T[] | T = this.repository.create(updateBody);
    const saved = await this.repository.save(newData);

    return { data: this.entityToDto(saved) };
  }

  async deleteOne(id: { id: number }): Promise<DeleteResult> {
    return this.repository.delete(id.id);
  }

  async deleteMany(query: QueryDto): Promise<DeleteResult> {
    return this.repository.delete(query.filter);
  }
}
