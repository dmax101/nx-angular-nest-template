import { Prisma } from '@prisma/client';

export type User = Prisma.UserCreateInput;

export type UserWithoutPassword = Omit<User, 'password'>;
