import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";

import { Request } from "express"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true
    });
  }
  async validate(req: Request, payload: any) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new UnauthorizedException();
    }

    const token = authorizationHeader.split(" ")[1];
    if (await this.authService.isTokenInvalid(token, payload)) {
      throw new UnauthorizedException();
    }
    
    return {
      id: payload.sub,
      identifier: payload.identifier
    }
  }
}
