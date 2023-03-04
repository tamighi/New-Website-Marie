import { Injectable } from "@nestjs/common";
import { UsersService } from "src/models/user/users.service";

const user = [
  {
    identifier: "test",
    password: "test",
  },
];

@Injectable()
export class AuthService {
  protected userService: UsersService;
  constructor(userService: UsersService) {
    this.userService = userService;
  }
  async validateUser(identifier: string, password: string): Promise<any> {
    const user = await this.userService.findOneByIdentifier(identifier);
    if (!user || user.password !== password) {
      return null;
    }
    return user;
  }
}
