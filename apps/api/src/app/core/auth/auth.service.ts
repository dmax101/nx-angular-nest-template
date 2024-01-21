import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../../modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import {
  UserPayload,
  UserWithoutPassword,
} from '../../modules/users/users.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    email: string,
    pass: string
  ): Promise<UserWithoutPassword> {
    const user = await this.usersService.findOne(email);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const isMatch = await bcrypt.compare(pass, user.password);

    if (isMatch) {
      delete user.password;

      return user;
    }
    return null;
  }

  async login(user: UserPayload) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }
}
