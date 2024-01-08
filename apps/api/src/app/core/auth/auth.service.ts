import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserWithoutPass as UserWithoutPassword } from '../users/users.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<UserWithoutPassword> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;

    console.log(password);

    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
