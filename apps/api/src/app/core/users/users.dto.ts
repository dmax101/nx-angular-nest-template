import { Prisma } from '@prisma/client';

export type User = Prisma.UserCreateInput;

export type UserWithoutPass = Omit<User, 'password'>;
