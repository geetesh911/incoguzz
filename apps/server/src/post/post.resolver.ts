import { Resolver, Arg, Mutation, Ctx, Query, Args } from "type-graphql";
import { Service } from "typedi";
import { Post } from "@/prisma/generated/type-graphql";
import { Authorized } from "@/auth/decorators/auth-checker.decorator";
import { Context } from "@/common/interfaces/context.interface";
import PostService from "./post.service";
import { AddPollPostInput, AddTextualPostInput } from "./inputs/add-post.input";
import GetUserPostsOutput from "./outputs/get-user-posts.output";
import AddClipPostArgs from "./args/add-clip-post.args";
import AddMediaPostArgs from "./args/add-media-post.args";

@Service()
@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Authorized()
  @Query(() => [GetUserPostsOutput])
  async getUserPosts(@Ctx() { user }: Context): Promise<GetUserPostsOutput[]> {
    return this.postService.getUserPosts(user.userId);
  }

  @Authorized()
  @Query(() => [GetUserPostsOutput])
  async getAllPosts(): Promise<GetUserPostsOutput[]> {
    return this.postService.getAllPosts();
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
