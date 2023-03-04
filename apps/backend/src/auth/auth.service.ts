import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/models/user/users.service";

const user = [
  {
    identifier: "test",
    password: "test",
  },
];

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(identifier: string, password: string): Promise<any> {
    const user = await this.userService.findOneByIdentifier(identifier);
    if (!user || user.password !== password) {
      return null;
    }
    return user;
  }

  async login(user: any) {
    const payload = { name: user.identifier, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
