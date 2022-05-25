import { PrismaClient, Prisma } from "@prisma/client";
import faker from "@faker-js/faker";
import fs from "fs";
import { IUser } from "./scrapedData/interfaces/usersData.interface";
import { IPosts } from "./scrapedData/interfaces/postsData.interface";
import { Post, User } from "../prisma/generated/type-graphql";
import path from "path";

const prisma = new PrismaClient();

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const users: User[] = [];
const posts: Post[] = [];

async function main() {
  const usersData = await new Promise<IUser[]>(resolve => {
    fs.readFile(
      path.resolve(__dirname, "./scrapedData/users.json"),
      "utf-8",
      (_err, data) => {
        console.log(_err);
        resolve(JSON.parse(data));
      },
    );
  });

  const userPromises = usersData.map(async userInfo => {
    return new Promise<User>(async resolve => {
      try {
        const user = await prisma.user.create({ data: userInfo });
        users.push(user);
        resolve(user);
      } catch (error) {
        console.log(error);
      }
    });
  });
  await Promise.all(userPromises);

  const postsData = await new Promise<IPosts[]>(resolve => {
    fs.readFile(
      path.resolve(__dirname, "./scrapedData/posts.json"),
      "utf-8",
      (_err, data) => {
        console.log(_err);
        resolve(JSON.parse(data));
      },
    );
  });

  console.log(users.length);

  console.log(users[getRandomInt(0, 99)].id);
  const postPromises = postsData?.map(async postInfo => {
    return new Promise<Post>(async resolve => {
      const postData: Prisma.PostCreateInput = {
        user: { connect: { id: users[getRandomInt(0, 99)].id } },
        caption: postInfo.caption,
        slug: `${Math.random()}-${faker.helpers.slugify(
          faker.random.words(2),
        )}`,
        type: postInfo.type as any,
        tags: {
          connectOrCreate: postInfo.tags.map(tag => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
        metaTags: postInfo.metaTags || [],
        photos:
          postInfo.type === "PHOTO"
            ? { createMany: { data: { url: postInfo.url } } }
            : undefined,
        video:
          postInfo.type === "VIDEO"
            ? {
                create: {
                  url: postInfo.url,
                  thumbnailUrl: postInfo.thumbnail,
                },
              }
            : undefined,
        textual:
          postInfo.type === "TEXTUAL"
            ? {
                create: {
                  text: postInfo.text,
                },
              }
            : undefined,
        audio:
          postInfo.type === "AUDIO"
            ? {
                create: {
                  url: postInfo.url,
                  thumbnailUrl: postInfo.thumbnail,
                },
              }
            : undefined,
      };
      try {
        const post = await prisma.post.create({ data: postData });
        posts.push(post);
        resolve(post);
      } catch (error) {
        console.error(error);
      }
    });
  });
  await Promise.all(postPromises);
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    fs.writeFile("./users.json", JSON.stringify(users), () => null);
    fs.writeFile("./posts.json", JSON.stringify(posts), () => null);
    await prisma.$disconnect();
  });
