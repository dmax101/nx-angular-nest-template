import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';

import { AppService } from './app.service';
import { LocalAuthGuard } from './core/auth/local-auth.guard';
import { AuthService } from './core/auth/auth.service';
import { JwtAuthGuard } from './core/auth/jwt-auth.guard';
import { Public } from './core/auth/public.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
