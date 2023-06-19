import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";
import { DevisService } from "./devis.service";
import { MessagesController } from "../message/messages.controller";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

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
  constructor(private readonly devisService: DevisService) {
    super(devisService);
  }

  @Post("postFormData")
  @UseInterceptors(FileInterceptor("file", multerConfig))
  async postMessageWithFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {
    console.log(file)
    try {
      return await this.devisService.postMessageWithFile(
        JSON.parse(body.devis),
        file
      );
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
