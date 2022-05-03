import BaseRepository from "@/common/repositories/BaseRepository";
import PrismaService from "@/common/services/prisma.service";
import {
  Bookmark,
  Post,
  PostType,
  Reaction,
} from "@/prisma/generated/type-graphql";
import {
  IAddClipPostParams,
  IAddMediaPostParams,
  IAddPollPostParams,
  IAddTextualPostParams,
} from "../interfaces/add-post.interface";
import { Prisma } from "@prisma/client";
import CreateBasicPostInputHelper from "../helpers/create-input.helper";
import { IBookmarkPostParams } from "../interfaces/bookmark.interface";
import {
  IAddPostReactionParams,
  IDeletePostReactionParams,
  IGetPostReactionParams,
} from "../interfaces/reaction.interface";
import {
  IGetPostParams,
  IGetPostsParams,
  IGetRelatedPostsRepoParams,
} from "../interfaces/get-post.interface";
import PaginationInput from "@/common/inputs/pagination.input";
import { IMetaTag } from "@/common/interfaces/storage.interface";
import { injectable } from "tsyringe";

interface IReader {
  getAllPosts: () => Promise<Post[]>;
  getPost: (params: IGetPostParams) => Promise<Post>;
  getUserPosts: (params: IGetPostsParams) => Promise<Post[]>;
  getExplorePosts: (params: IGetPostsParams) => Promise<Post[]>;
  getRelatedPosts: (params: IGetRelatedPostsRepoParams) => Promise<Post[]>;
  getBookmarkedPosts: (params: IGetPostsParams) => Promise<Bookmark[]>;
  getPostReaction: (params: IGetPostReactionParams) => Promise<Reaction>;
}
interface IWriter {
  addTextualPost: (params: IAddTextualPostParams) => Promise<Post>;
  addPollPost: (params: IAddPollPostParams) => Promise<Post>;
  addMediaPost: (params: IAddMediaPostParams) => Promise<Post>;
  addClipPost: (params: IAddClipPostParams) => Promise<Post>;
  addPostReaction: (params: IAddPostReactionParams) => Promise<Reaction>;
  deletePostReaction: (params: IDeletePostReactionParams) => Promise<Reaction>;
  addPostBookmark: (params: IBookmarkPostParams) => Promise<void>;
  deletePostBookmark: (params: IBookmarkPostParams) => Promise<void>;
  incrementPostView: (postId: string) => Promise<void>;
}

type TUserRepository = IReader & IWriter;

@injectable()
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

  private getPaginationArgs(
    paginationInput: PaginationInput,
  ): Pick<Prisma.PostFindManyArgs, "take" | "skip" | "cursor"> {
    const { take, firstQueryResult, cursor } = paginationInput;

    return {
      take,
      skip: firstQueryResult ? 0 : 1,
      cursor: cursor && { id: cursor },
    };
  }

  public async getPost({ postId, userId }: IGetPostParams): Promise<Post> {
    return this.prisma.post.findUnique({
      where: { id: postId },
      include: this.getPostsIncludeArgs(userId),
    });
  }

  public async getAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {},
      include: { tags: true },
    });
  }

  public async getUserPosts({
    userId,
    paginationInput,
  }: IGetPostsParams): Promise<Post[]> {
    return this.prisma.post.findMany({
      ...this.getPaginationArgs(paginationInput),
      where: { userId, archive: false },
      include: this.getPostsIncludeArgs(userId),
      orderBy: { createdAt: "desc" },
    });
  }

  public async getExplorePosts({
    userId,
    paginationInput,
  }: IGetPostsParams): Promise<Post[]> {
    return this.prisma.post.findMany({
      ...this.getPaginationArgs(paginationInput),
      where: {},
      include: this.getPostsIncludeArgs(userId),
      orderBy: { createdAt: "desc" },
    });
  }

  public async getRelatedPosts({
    userId,
    paginationInput,
    tags,
    metaTags,
  }: IGetRelatedPostsRepoParams): Promise<Post[]> {
    metaTags = metaTags as IMetaTag[];

    return this.prisma.post.findMany({
      ...this.getPaginationArgs(paginationInput),
      where: {
        OR: [
          ...tags.map(tag => ({ tags: { some: { name: tag.name } } })),
          {
            metaTags: {
              path: "$[*].tag",
              array_contains: metaTags?.map(
                (metaTag: IMetaTag) => metaTag?.tag,
              ),
            },
          },
        ],
      },
      include: this.getPostsIncludeArgs(userId),
      orderBy: { createdAt: "asc" },
    });
  }

  public async getBookmarkedPosts({
    userId,
    paginationInput,
  }: IGetPostsParams): Promise<Bookmark[]> {
    return this.prisma.bookmark.findMany({
      ...this.getPaginationArgs(paginationInput),
      where: { userId },
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

  public async incrementPostView(postId: string): Promise<void> {
    await this.prisma.post.update({
      where: { id: postId },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  }

  public async addPostBookmark({
    postId,
    userId,
  }: IBookmarkPostParams): Promise<void> {
    await this.prisma.bookmark.create({
      data: {
        post: { connect: { id: postId } },
        user: { connect: { id: userId } },
      },
    });
  }

  public async deletePostBookmark({
    postId,
    userId,
  }: IBookmarkPostParams): Promise<void> {
    await this.prisma.bookmark.delete({
      where: {
        postId_userId: { postId, userId },
      },
    });
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
        metaTags: [],
        published,
        userId,
      }),
      textual: {
        create: { text: text },
      },
    };
    return this.prisma.post.create({
      data: postCreateInput,
      include: { textual: true },
    });
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
        metaTags: [],
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
    metaData,
    extraOptions,
  }: IAddMediaPostParams): Promise<Post> {
    const { type, place, tags, published, caption } = addPostInput;
    const { metaTags } = metaData;

    let postCreateInput: Prisma.PostCreateInput =
      this.createBasicPostInputHelper.createMediaBasicPostInput({
        type,
        place,
        tags,
        metaTags,
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
    metaData,
    extraOptions,
  }: IAddClipPostParams): Promise<Post> {
    const { type, place, tags, published, caption } = addPostInput;
    const { metaTags } = metaData;

    let postCreateInput: Prisma.PostCreateInput =
      this.createBasicPostInputHelper.createMediaBasicPostInput({
        type,
        place,
        tags,
        metaTags,
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
