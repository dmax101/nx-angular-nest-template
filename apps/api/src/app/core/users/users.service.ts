import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './users.dto';

/**
 * Service responsible for managing users.
 */
@Injectable()
export class UsersService {
  /**
   * Creates a new instance of the `UsersService` class.
   * @param prisma The Prisma service instance.
   */
  constructor(private prisma: PrismaService) {}

  /**
   * The Prisma `User` model.
   */
  users = this.prisma.user;

  /**
   * Finds a user by their username.
   * @param username The username of the user to find.
   * @returns A `Promise` that resolves to the `User` object if found, or `undefined` if not found.
   */
  async findOne(username: string): Promise<User | undefined> {
    return this.users.findFirst({
      where: {
        username,
      },
    });
  }
}
