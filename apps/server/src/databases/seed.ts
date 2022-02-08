import { PrismaClient } from "@prisma/client";
import faker from "@faker-js/faker";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("hello", 10);

  [...Array(10).keys()].forEach(async (num: number) => {
    const userData = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password,
      isVerified: num % 2 === 0,
      profile: { create: { nickname: faker.name.findName() } },
    };
    await prisma.user.create({ data: userData });
  });
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
