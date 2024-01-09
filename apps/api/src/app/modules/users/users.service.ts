import { Injectable } from '@nestjs/common';
import { User } from './users.dto';
import { PrismaService } from '../../shared/services/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  users = this.prisma.user;

  async findOne(email: string): Promise<User | undefined> {
    return this.users.findUnique({
      where: {
        email,
      },
    });
  }
}
