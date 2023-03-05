import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req: any): Promise<any> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("checkAuth")
  async checkAuth(@Request() req: any): Promise<any> {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post("logout")
  async logout(@Request() req: any) {
    return this.authService.logout(req.user);
  }
}
