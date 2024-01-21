import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const saltRounds = 10;

async function main() {
  const newUser = await prisma.user.createMany({
    data: [
      {
        firstName: 'admin',
        lastName: 'super',
        email: 'admin@admin.com',
        password: await bcrypt.hash('admin', saltRounds),
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: await bcrypt.hash('password', saltRounds),
      },
      {
        firstName: 'Danilo',
        lastName: 'Ribeiro',
        email: 'danriba@gmail.com',
        password: await bcrypt.hash('senha123', saltRounds),
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
