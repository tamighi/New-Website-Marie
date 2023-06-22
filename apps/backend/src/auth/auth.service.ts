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
    return this.userService.validateUser(identifier, password)
  }

  async login(user: any) {
    const payload = { identifier: user.identifier, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async logout(user: any) {
    return user;
  }
}
