import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Response } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

import { JwtAuthGuard } from "src/auth";
import { FileService } from "../core";

import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";
import { DevisService } from "./devis.service";
import { MessagesController } from "../message/messages.controller";

const multerConfig: MulterOptions = {
  storage: diskStorage({
    destination: "./uploads",
    filename: (_, file, callback) => {
      const originalName = file.originalname;
      const fileExtension = originalName.split(".").pop();
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = `file-${uniqueSuffix}.${fileExtension}`;
      callback(null, filename);
    },
  }),
  fileFilter: (_, file, cb) => {
    if (file.mimetype.startsWith("text/")) {
      cb(null, true);
    } else {
      cb(new Error("Only text documents are allowed."), false);
    }
  },
};

@Controller("devis")
export class DevisController extends MessagesController<Devis, DevisDto> {
  constructor(
    private readonly devisService: DevisService,
    private readonly fileService: FileService
  ) {
    super(devisService);
  }

  @Post("postFile")
  @UseInterceptors(FileInterceptor("file", multerConfig))
  async postMessageWithFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {
    let storedFile = undefined;

    if (file instanceof Error) {
      throw new HttpException(file.message, HttpStatus.BAD_REQUEST);
    }
    if (file) {
      storedFile = await this.fileService.storeFilename(file);
    }
    try {
      const devis = JSON.parse(body.devis);
      devis.file = storedFile;
      return await this.devisService.postMessage(devis);
    } catch (err) {
      if (storedFile) {
        this.fileService.deleteFile(storedFile.id);
      }
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get("getFile/:id")
  async getFile(@Param() param: { id: number }, @Res() res: Response) {
    try {
      const file = await this.fileService.getFile(param.id);
      res.download(`./uploads/${file.storedFilename}`, file.originalFilename);
      return { status: "ok" };
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete("deleteFile/:id")
  @HttpCode(204)
  async deleteFile(@Param() id: { id: number }) {
    console.log(id)
    const devis = await this.devisService.getOneById(id);

    if (devis.data.file) {
      this.fileService.deleteFile(devis.data.file.id);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  @HttpCode(204)
  async deleteOne(@Param() id: { id: number }) {
    const devis = await this.devisService.getOneById(id);
    if (devis.data.file) {
      this.fileService.deleteFile(devis.data.file.id);
    }
    super.deleteOne(id);
  }
}
