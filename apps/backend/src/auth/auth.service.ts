import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Cron } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "src/models/user/dtos/user.dto";
import { UsersService } from "src/models/user/users.service";
import { LessThan, Repository } from "typeorm";
import { InvalidatedToken } from "./entities/invalidatedToken.entity";

@Injectable()
export class AuthService {
  private invalidatedTokenRepository: Repository<InvalidatedToken>;
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRepository(InvalidatedToken)
    repository: Repository<InvalidatedToken>
  ) {
    this.invalidatedTokenRepository = repository;
  }

  @Cron("0 * * * *")
  async deleteExpiredTokens() {
    const currentDateTime = new Date();
    await this.invalidatedTokenRepository.delete({
      expires: LessThan(currentDateTime),
    });
  }

  async isTokenInvalid(token: string, payload: any) {
    const isInvalidated = await this.invalidatedTokenRepository.exist({
      where: {
        token,
      },
    });

    try {
      const decodedToken = this.jwtService.verify(token);
      const creationDate = new Date(decodedToken.iat * 1000);

      const user = await this.userService.getOneById(payload.sub);

      const isNewPassword = user.data.lastModified
        ? user.data.lastModified > creationDate
        : false;

      return isInvalidated || isNewPassword;
    } catch {
      throw new UnauthorizedException();
    }
  }

  async validateUser(
    identifier: string,
    password: string
  ): Promise<UserDto | null> {
    return this.userService.validateUser(identifier, password);
  }

  async login(user: any) {
    const payload = { identifier: user.identifier, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async invalidateToken(token: string) {
    const invalidatedToken = this.invalidatedTokenRepository.create();

    invalidatedToken.token = token;
    try {
      const decodedToken = this.jwtService.verify(token);

      const expirationDate = new Date(decodedToken.exp * 1000);

      invalidatedToken.expires = expirationDate;

      return this.invalidatedTokenRepository.save(invalidatedToken);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async logout(user: any, token: string) {
    this.invalidateToken(token);
    return user;
  }

  async changePassword(user: any, body: any) {
    const validation = await this.validateUser(
      user.identifier,
      body.oldPassword
    );
    if (!validation) {
      throw new UnauthorizedException();
    }
    await this.userService.changePassword(validation.id, body.newPassword);

    const payload = { identifier: validation.identifier, sub: validation.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
