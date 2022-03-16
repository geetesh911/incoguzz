import BaseRepository from "@/common/repositories/BaseRepository";
import PrismaService from "@/common/services/prisma.service";
import { Post, PostType } from "@/prisma/generated/type-graphql";
import { Service } from "typedi";
import {
  AddClipPostInput,
  AddMediaPostInput,
  AddPollPostInput,
  AddTextualPostInput,
} from "../inputs/add-post.input";
import {
  IAddClipPostExtraOptions,
  IAddMediaPostExtraOptions,
} from "../interfaces/add-post.interface";
import { Prisma } from "@prisma/client";
import CreateBasicPostInputHelper from "../helpers/create-input.helper";

interface IReader {
  getUserPosts: (userId: string) => Promise<Post[]>;
  getAllPosts: () => Promise<Post[]>;
}
interface IWriter {
  addMediaPost: (
    userId: string,
    addPostInput: AddMediaPostInput,
    urls: string[],
  ) => Promise<Post>;
}

type TUserRepository = IReader & IWriter;

@Service()
class PostRepository extends BaseRepository implements TUserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly createBasicPostInputHelper: CreateBasicPostInputHelper,
  ) {
    super("post");
  }

  public async getUserPosts(userId: string): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: { userId, archive: false },
      include: {
        photos: true,
        video: true,
        clip: {
          include: { clipAudio: true },
        },
        audio: true,
        poll: { include: { pollOptions: true } },
        textual: true,
        place: true,
        tags: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  public async getAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {},
      include: {
        photos: true,
        video: true,
        clip: {
          include: { clipAudio: true },
        },
        audio: true,
        poll: { include: { pollOptions: true } },
        textual: true,
        place: true,
        tags: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  public addTextualPost(
    userId: string,
    addTextualPostInput: AddTextualPostInput,
  ): Promise<Post> {
    const { type, tags, published, text } = addTextualPostInput;
    const postCreateInput: Prisma.PostCreateInput = {
      ...this.createBasicPostInputHelper.createBasicPostInput({
        type,
        tags,
        published,
        userId,
      }),
      textual: {
        create: { text: text },
      },
    };
    return this.prisma.post.create({ data: postCreateInput });
  }

  public addPollPost(
    userId: string,
    addPollPostInput: AddPollPostInput,
  ): Promise<Post> {
    const { type, tags, published, pollOptions, pollQuestion } =
      addPollPostInput;

    const postCreateInput: Prisma.PostCreateInput = {
      ...this.createBasicPostInputHelper.createBasicPostInput({
        type,
        tags,
        published,
        userId,
      }),
      poll: {
        create: {
          question: pollQuestion,
          pollOptions: {
            createMany: {
              data: pollOptions.map(option => option),
            },
          },
        },
      },
    };

    return this.prisma.post.create({ data: postCreateInput });
  }

  public async addMediaPost(
    userId: string,
    addPostInput: AddMediaPostInput,
    urls: string[],
    extraOptions?: IAddMediaPostExtraOptions,
  ): Promise<Post> {
    const { type, place, tags, published, caption } = addPostInput;

    let postCreateInput: Prisma.PostCreateInput =
      this.createBasicPostInputHelper.createMediaBasicPostInput({
        type,
        place,
        tags,
        published,
        caption,
        userId,
      });

    switch (type) {
      case PostType.AUDIO:
        postCreateInput = {
          ...postCreateInput,
          audio: {
            create: { url: urls[0], thumbnailUrl: extraOptions.thumbnailUrl },
          },
        };

        break;

      case PostType.PHOTO:
        postCreateInput = {
          ...postCreateInput,
          photos: {
            createMany: { data: urls.map(url => ({ url })) },
          },
        };

        break;

      case PostType.VIDEO:
        postCreateInput = {
          ...postCreateInput,
          user: { connect: { id: userId } },
          video: {
            create: { thumbnailUrl: extraOptions.thumbnailUrl, url: urls[0] },
          },
        };

        break;

      default:
        break;
    }

    return this.prisma.post.create({ data: postCreateInput });
  }
  public async addClipPost(
    userId: string,
    addPostInput: AddClipPostInput,
    urls: string[],
    extraOptions?: IAddClipPostExtraOptions,
  ): Promise<Post> {
    const { type, place, tags, published, caption } = addPostInput;

    let postCreateInput: Prisma.PostCreateInput =
      this.createBasicPostInputHelper.createMediaBasicPostInput({
        type,
        place,
        tags,
        published,
        caption,
        userId,
      });

    const clipAudioId = "";

    const { audioUrl, audioName, thumbnailUrl } = extraOptions;

    postCreateInput = {
      ...postCreateInput,
      clip: {
        create: {
          url: urls[0],
          thumbnailUrl,
          clipAudio: {
            connectOrCreate: {
              where: { id: clipAudioId },
              create: { audioUrl, name: audioName },
            },
          },
        },
      },
    };

    return this.prisma.post.create({ data: postCreateInput });
  }
}

export default PostRepository;
