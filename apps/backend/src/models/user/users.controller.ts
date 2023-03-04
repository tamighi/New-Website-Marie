import { Controller } from "@nestjs/common";
import { AbstractController } from "src/models/abstract/abstract.controller";
import { UserDto } from "./dtos/user.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Controller("user")
export class UsersController extends AbstractController<User, UserDto> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }
}
