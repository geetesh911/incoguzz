import { PrismaClient, Prisma } from "@prisma/client";
import faker from "@faker-js/faker";
import bcrypt from "bcrypt";
import fs from "fs";
import { logger } from "@/utils/logger";

const prisma = new PrismaClient();

const users = [];
const posts = [];

const videoList = [
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
  {
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    thumb: `https://picsum.photos/seed/${faker.word.verb()}/1920/1280`,
  },
];

const audioList = [
  {
    source:
      "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
    thumb:
      "https://res.cloudinary.com/geeteshpp/image/upload/v1645083626/Frame_25_fkfw7a.png",
  },
];

const userSize = 25;

async function main() {
  const password = await bcrypt.hash("hello", 10);

  const PostType = {
    TEXTUAL: "TEXTUAL",
    VIDEO: "VIDEO",
    PHOTO: "PHOTO",
    AUDIO: "AUDIO",
  };

  [...Array(userSize).keys()].forEach(async (num: number) => {
    try {
      const userData = {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password,
        isVerified: num % 2 === 0,
        profile: { create: { nickname: faker.name.findName() } },
      };
      users.push(userData);
      const user = await prisma.user.create({ data: userData });

      [...Array(3).keys()].forEach(async () => {
        const tags = faker.random.words().split(" ");

        const types = Object.keys(PostType)?.map(postType => postType);

        const imageHeights = [1920, 1280, 760];
        const imageWidths = [1920, 1280, 760];
        const type = types[faker.datatype.number({ min: 0, max: 3 })];

        const caption =
          type === PostType.TEXTUAL ? null : faker.random.words(10);

        const textual =
          type === PostType.TEXTUAL
            ? {
                create: { text: faker.lorem.lines() },
              }
            : undefined;

        const photos =
          type === PostType.PHOTO
            ? {
                createMany: {
                  data: [...Array(3).keys()]
                    .map(
                      () =>
                        `https://picsum.photos/seed/${faker.word.verb()}/${
                          imageWidths[faker.datatype.number({ min: 0, max: 2 })]
                        }/${
                          imageHeights[
                            faker.datatype.number({ min: 0, max: 2 })
                          ]
                        }`,
                    )
                    .map(url => ({ url })),
                },
              }
            : undefined;
        const videoData =
          videoList[
            faker.datatype.number({ min: 0, max: videoList.length - 1 })
          ];

        const video =
          type === PostType.VIDEO
            ? {
                create: {
                  thumbnailUrl: videoData.thumb,
                  url: videoData.sources,
                },
              }
            : undefined;
        const audio =
          type === PostType.AUDIO
            ? {
                create: {
                  thumbnailUrl: audioList[0].thumb,
                  url: audioList[0].source,
                },
              }
            : undefined;

        const postData: Prisma.PostCreateInput = {
          user: { connect: { id: user.id } },
          caption,
          slug: `${Math.random()}-${faker.helpers.slugify(
            faker.random.words(2),
          )}`,
          type: type as any,
          tags: {
            connectOrCreate: tags.map(tag => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
          photos,
          video,
          textual,
          audio,
        };
        try {
          await prisma.post.create({ data: postData });
        } catch (error) {
          logger.error(error);
        }
      });
    } catch (error) {
      logger.error(error);
    }
  });
}

main()
  .catch(error => {
    logger.error(error);
    process.exit(1);
  })
  .finally(async () => {
    fs.writeFile("./users.json", JSON.stringify(users), () => null);
    fs.writeFile("./posts.json", JSON.stringify(posts), () => null);
    await prisma.$disconnect();
  });
