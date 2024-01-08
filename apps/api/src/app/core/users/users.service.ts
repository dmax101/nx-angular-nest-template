import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

export type User = Prisma.UserCreateInput;

@Injectable()
export class UsersService {
  /**
   *
   */
  constructor(private prisma: PrismaService) {}

  users = this.prisma.user;

  // private readonly users = [
  //   {
  //     id: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     id: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  async findOne(username: string): Promise<User | undefined> {
    // return this.users.find((user) => user.username === username);
    return this.users.findFirst({
      where: {
        username,
      },
    });
  }
}
