import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.createMany({
    data: [
      {
        firstName: 'admin',
        lastName: 'super',
        email: 'admin@admin.com',
        password: 'admin',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
      },
      {
        firstName: 'Danilo',
        lastName: 'Ribeiro',
        email: 'danriba@gmail.com',
        password: 'senha123',
      },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
