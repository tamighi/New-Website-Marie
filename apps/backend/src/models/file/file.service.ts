import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { File } from "./entity/file.entity";

@Injectable()
export class FileService {
  private fileRepository: Repository<File>;

  constructor(@InjectRepository(File) repository: Repository<File>) {
    this.fileRepository = repository;
  }

  async storeFilename(file: Express.Multer.File) {
    const entity = this.fileRepository.create({
      storedFilename: file.filename,
      originalFilename: file.originalname,
    });
    await this.fileRepository.save(entity);

    return entity;
  }
}
