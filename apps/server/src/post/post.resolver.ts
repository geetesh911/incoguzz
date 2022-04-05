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
    return this.postService.getUserPosts(user.userId, paginationInput);
  }

  @Authorized()
  @Query(() => GetPostsOutput)
  async getAllPosts(
    @Arg("paginationInput", () => PaginationInput)
    paginationInput: PaginationInput,
  ): Promise<GetPostsOutput> {
    return this.postService.getAllPosts(paginationInput);
  }

  @Authorized()
  @Mutation(() => Post)
  async addMediaPost(
    @Ctx() { user }: Context,
    @Args() { addMediaPostInput, media, mediaThumbnail }: AddMediaPostArgs,
  ): Promise<Post> {
    return this.postService.addMediaPost(
      user.userId,
      addMediaPostInput,
      media,
      mediaThumbnail,
    );
  }

  @Authorized()
  @Mutation(() => Post)
  async addClipPost(
    @Ctx() { user }: Context,
    @Args() { addClipPostInput, clipMedia, clipAudioMedia }: AddClipPostArgs,
  ): Promise<boolean> {
    this.postService.addClipPost(
      user.userId,
      addClipPostInput,
      clipMedia,
      clipAudioMedia,
    );
    return true;
  }

  @Authorized()
  @Mutation(() => Post)
  async addTextualPost(
    @Ctx() { user }: Context,
    @Arg("addTextualPostInput", () => AddTextualPostInput)
    addTextualPostInput: AddTextualPostInput,
  ): Promise<Post> {
    return this.postService.addTextualPost(user.userId, addTextualPostInput);
  }

  @Authorized()
  @Mutation(() => Post)
  async addPollPost(
    @Ctx() { user }: Context,
    @Arg("addPollPostInput", () => AddPollPostInput)
    addPollPostInput: AddPollPostInput,
  ): Promise<Post> {
    return this.postService.addPollPost(user.userId, addPollPostInput);
  }
}
