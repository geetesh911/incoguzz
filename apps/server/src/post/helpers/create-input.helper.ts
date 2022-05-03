import { Prisma } from "@prisma/client";
import { nanoid } from "nanoid";
import { injectable } from "tsyringe";
import {
  BasicMediaPostCreateInput,
  BasicPostCreateInput,
} from "../interfaces/add-post.interface";

@injectable()
class CreateBasicPostInputHelper {
  public createBasicPostInput(
    basicInput: BasicPostCreateInput,
  ): Prisma.PostCreateInput {
    const { type, published, userId, tags, metaTags } = basicInput;
    return {
      type,
      published,
      user: { connect: { id: userId } },
      slug: nanoid(),
      metaTags: metaTags || [],
      tags: {
        connectOrCreate: tags.map(tag => ({
          where: { name: tag },
          create: { name: tag },
        })),
      },
    };
  }
  createMediaBasicPostInput(
    basicInput: BasicMediaPostCreateInput,
  ): Prisma.PostCreateInput {
    const { caption, place } = basicInput;
    return {
      ...this.createBasicPostInput(basicInput),
      caption: caption,
      place: place && {
        connectOrCreate: {
          where: { address: place?.address },
          create: { name: place.name, address: place.address },
        },
      },
    };
  }
}

export default CreateBasicPostInputHelper;
