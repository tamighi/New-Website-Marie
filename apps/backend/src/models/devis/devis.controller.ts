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
import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";
import { DevisService } from "./devis.service";
import { MessagesController } from "../message/messages.controller";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { Response } from "express";
import { FileService } from "../file/file.service";

const multerConfig = {
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
};

@Controller("devis")
export class DevisController extends MessagesController<Devis, DevisDto> {
  constructor(
    private readonly devisService: DevisService,
    private readonly fileService: FileService
  ) {
    super(devisService);
  }

  @Post("postFormData")
  @UseInterceptors(FileInterceptor("file", multerConfig))
  async postMessageWithFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {
    let storedFile = undefined;
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
  @Delete("/:id")
  @HttpCode(204)
  async deleteOne(@Param() id: { id: number }) {
    const devis = await this.devisService.getOneById(id)
    if (devis.data.file) {
      this.fileService.deleteFile(devis.data.file.id)
    }
    super.deleteOne(id);
  }
}
