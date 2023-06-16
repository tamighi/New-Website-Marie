import {
    Body,
  Controller, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors,
} from "@nestjs/common";
import { DevisDto } from "./dtos/devis.dto";
import { Devis } from "./entities/devis.entity";
import { DevisService } from "./devis.service";
import { MessagesController } from "../message/messages.controller";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("devis")
export class DevisController extends MessagesController<Devis, DevisDto> {
  constructor(private readonly devisService: DevisService) {
    super(devisService);
  }

  @Post("postFormData")
  @UseInterceptors(FileInterceptor('file'))
  async postFormData(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    try {
      console.log("FILE: ", file)
      return await this.devisService.postMessage(JSON.parse(body.devis));
    } catch (err) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }
}
