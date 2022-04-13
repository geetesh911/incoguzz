import { Resolver, Arg, Mutation, Ctx, Query, Args } from "type-graphql";
import { Service } from "typedi";
import { Post } from "@/prisma/generated/type-graphql";
import { Authorized } from "@/auth/decorators/auth-checker.decorator";
import { Context } from "@/common/interfaces/context.interface";
import PostService from "./post.service";
import { AddPollPostInput, AddTextualPostInput } from "./inputs/add-post.input";
import AddClipPostArgs from "./args/add-clip-post.args";
import AddMediaPostArgs from "./args/add-media-post.args";
import GetPostsOutput from "./outputs/get-posts.output";
import PaginationInput from "@/common/inputs/pagination.input";
import PostReactionInput from "./inputs/post-reaction.input";
import ReactionOutput from "./outputs/reaction.output";
import BookmarksOutput, { BookmarkPostOutput } from "./outputs/bookmark.output";

@Service()
@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Authorized()
  @Query(() => GetPostsOutput)
  async getUserPosts(
    @Ctx() { user }: Context,
    @Arg("paginationInput", () => PaginationInput)
    paginationInput: PaginationInput,
  ): Promise<GetPostsOutput> {
    return this.postService.getUserPosts({
      userId: user.userId,
      paginationInput,
    });
  }

  @Authorized()
  @Query(() => GetPostsOutput)
  async getExplorePosts(
    @Ctx() { user }: Context,
    @Arg("paginationInput", () => PaginationInput)
    paginationInput: PaginationInput,
  ): Promise<GetPostsOutput> {
    return this.postService.getExplorePosts({
      userId: user.userId,
      paginationInput,
    });
  }

  @Authorized()
  @Query(() => BookmarksOutput)
  async getBookmarkedPosts(
    @Ctx() { user }: Context,
    @Arg("paginationInput", () => PaginationInput)
    paginationInput: PaginationInput,
  ): Promise<BookmarksOutput> {
    return this.postService.getBookmarkedPosts({
      userId: user.userId,
      paginationInput,
    });
  }

  @Authorized()
  @Mutation(() => BookmarkPostOutput)
  async bookmarkPost(
    @Ctx() { user }: Context,
    @Arg("postId", () => String) postId: string,
  ): Promise<BookmarkPostOutput> {
    const isPostBookmarked = await this.postService.bookmarPost({
      postId,
      userId: user.userId,
    });

    return {
      bookmarked: isPostBookmarked,
      postId,
    };
  }

  @Authorized()
  @Mutation(() => Boolean)
  async incrementPostView(
    @Arg("postId", () => String) postId: string,
  ): Promise<boolean> {
    return this.postService.incrementPostView(postId);
  }

  @Authorized()
  @Mutation(() => ReactionOutput)
  async postReaction(
    @Ctx() { user }: Context,
    @Arg("postReactionInput", () => PostReactionInput)
    { postId, reactionType }: PostReactionInput,
  ): Promise<ReactionOutput> {
    return this.postService.postReaction({
      postId,
      userId: user.userId,
      reactionType,
    });
  }

  @Authorized()
  @Mutation(() => Post)
  async addMediaPost(
    @Ctx() { user }: Context,
    @Args() { addMediaPostInput, media, mediaThumbnail }: AddMediaPostArgs,
  ): Promise<Post> {
    return this.postService.addMediaPost({
      userId: user.userId,
      addMediaPostInput,
      media,
      mediaThumbnail,
    });
  }

  @Authorized()
  @Mutation(() => Post)
  async addClipPost(
    @Ctx() { user }: Context,
    @Args() { addClipPostInput, clipMedia, clipAudioMedia }: AddClipPostArgs,
  ): Promise<boolean> {
    this.postService.addClipPost({
      userId: user.userId,
      addClipPostInput,
      clipMedia,
      clipAudioMedia,
    });
    return true;
  }

  @Authorized()
  @Mutation(() => Post)
  async addTextualPost(
    @Ctx() { user }: Context,
    @Arg("addTextualPostInput", () => AddTextualPostInput)
    addTextualPostInput: AddTextualPostInput,
  ): Promise<Post> {
    return this.postService.addTextualPost({
      userId: user.userId,
      addTextualPostInput,
    });
  }

  @Authorized()
  @Mutation(() => Post)
  async addPollPost(
    @Ctx() { user }: Context,
    @Arg("addPollPostInput", () => AddPollPostInput)
    addPollPostInput: AddPollPostInput,
  ): Promise<Post> {
    return this.postService.addPollPost({
      userId: user.userId,
      addPollPostInput,
    });
  }
}
