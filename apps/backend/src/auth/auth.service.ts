import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "src/models/user/dtos/user.dto";
import { UsersService } from "src/models/user/users.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(
    identifier: string,
    password: string
  ): Promise<UserDto | null> {
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

  async logout(user: any) {
    return user;
  }
}
