import BaseRepository from "@/common/repositories/BaseRepository";
import PrismaService from "@/common/services/prisma.service";
import {
  Bookmark,
  Post,
  PostType,
  Reaction,
} from "@/prisma/generated/type-graphql";
import { Service } from "typedi";
import {
  IAddClipPostParams,
  IAddMediaPostParams,
  IAddPollPostParams,
  IAddTextualPostParams,
} from "../interfaces/add-post.interface";
import { Prisma } from "@prisma/client";
import CreateBasicPostInputHelper from "../helpers/create-input.helper";
import { IBookmarkPostParams } from "../interfaces/bookmark.interface";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import {
  IAddPostReactionParams,
  IDeletePostReactionParams,
  IGetPostReactionParams,
} from "../interfaces/reaction.interface";
import { IGetPostParams } from "../interfaces/get-post.interface";

interface IReader {
  getUserPosts: (params: IGetPostParams) => Promise<Post[]>;
  getExplorePosts: (params: IGetPostParams) => Promise<Post[]>;
  getBookmarkedPosts: (params: IGetPostParams) => Promise<Bookmark[]>;
  getPostReaction: (params: IGetPostReactionParams) => Promise<Reaction>;
}
interface IWriter {
  addTextualPost: (params: IAddTextualPostParams) => Promise<Post>;
  addPollPost: (params: IAddPollPostParams) => Promise<Post>;
  addMediaPost: (params: IAddMediaPostParams) => Promise<Post>;
  addClipPost: (params: IAddClipPostParams) => Promise<Post>;
  addPostReaction: (params: IAddPostReactionParams) => Promise<Reaction>;
  deletePostReaction: (params: IDeletePostReactionParams) => Promise<Reaction>;
  bookmarkPost: (params: IBookmarkPostParams) => Promise<void>;
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

  private getPostsIncludeArgs(
    userId: string,
  ): Prisma.PostFindManyArgs["include"] {
    return {
      photos: true,
      video: true,
      clip: { include: { clipAudio: true } },
      audio: true,
      poll: { include: { pollOptions: true } },
      textual: true,
      place: true,
      tags: true,
      bookmarks: { where: { userId } },
      reactions: { where: { userId } },
    };
  }

  public async getUserPosts({
    userId,
    paginationInput,
  }: IGetPostParams): Promise<Post[]> {
    const { take, firstQueryResult, cursor } = paginationInput;

    return this.prisma.post.findMany({
      take,
      skip: firstQueryResult ? 0 : 1,
      cursor: cursor && { id: cursor },
      where: { userId, archive: false },
      include: this.getPostsIncludeArgs(userId),
      orderBy: { createdAt: "desc" },
    });
  }

  public async getExplorePosts({
    userId,
    paginationInput,
  }: IGetPostParams): Promise<Post[]> {
    const { take, firstQueryResult, cursor } = paginationInput;
    return this.prisma.post.findMany({
      take,
      skip: firstQueryResult ? 0 : 1,
      cursor: cursor && { id: cursor },
      where: {},
      include: this.getPostsIncludeArgs(userId),
      orderBy: { createdAt: "desc" },
    });
  }

  public async getBookmarkedPosts({
    userId,
    paginationInput,
  }: IGetPostParams): Promise<Bookmark[]> {
    const { take, firstQueryResult, cursor } = paginationInput;
    return this.prisma.bookmark.findMany({
      where: { userId },
      take,
      skip: firstQueryResult ? 0 : 1,
      cursor: cursor && { id: cursor },
      include: {
        post: { include: this.getPostsIncludeArgs(userId) },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  public async getPostReaction({
    postId,
    userId,
  }: IGetPostReactionParams): Promise<Reaction> {
    return this.prisma.reaction.findUnique({
      where: {
        postId_userId: { postId, userId },
      },
    });
  }

  public async deletePostReaction({
    postId,
    userId,
  }: IDeletePostReactionParams): Promise<Reaction> {
    return this.prisma.reaction.delete({
      where: {
        postId_userId: { postId, userId },
      },
    });
  }

  public async addPostReaction({
    postId,
    userId,
    reactionType,
  }: IAddPostReactionParams): Promise<Reaction> {
    return this.prisma.reaction.upsert({
      where: {
        postId_userId: { postId, userId },
      },
      create: {
        post: { connect: { id: postId } },
        user: { connect: { id: userId } },
        reaction: reactionType,
      },
      update: {
        reaction: reactionType,
      },
    });
  }

  public async bookmarkPost({
    postId,
    userId,
  }: IBookmarkPostParams): Promise<void> {
    try {
      await this.prisma.bookmark.create({
        data: {
          post: { connect: { id: postId } },
          user: { connect: { id: userId } },
        },
      });
    } catch (error) {
      if ((error as PrismaClientKnownRequestError).code === "P2002") {
        await this.prisma.bookmark.delete({
          where: {
            postId_userId: { postId, userId },
          },
        });
      }
    }
  }

  public addTextualPost({
    userId,
    addTextualPostInput,
  }: IAddTextualPostParams): Promise<Post> {
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

  public addPollPost({
    userId,
    addPollPostInput,
  }: IAddPollPostParams): Promise<Post> {
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

  public async addMediaPost({
    userId,
    addPostInput,
    urls,
    extraOptions,
  }: IAddMediaPostParams): Promise<Post> {
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

  public async addClipPost({
    userId,
    addPostInput,
    urls,
    extraOptions,
  }: IAddClipPostParams): Promise<Post> {
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
