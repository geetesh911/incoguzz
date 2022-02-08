import * as TypeGraphQL from "type-graphql";
import { Activity } from "../../../models/Activity";
import { Audio } from "../../../models/Audio";
import { Clip } from "../../../models/Clip";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { Message } from "../../../models/Message";
import { Photo } from "../../../models/Photo";
import { Place } from "../../../models/Place";
import { Poll } from "../../../models/Poll";
import { Post } from "../../../models/Post";
import { Tag } from "../../../models/Tag";
import { Textual } from "../../../models/Textual";
import { User } from "../../../models/User";
import { Video } from "../../../models/Video";
import { PostActivitiesArgs } from "./args/PostActivitiesArgs";
import { PostCommentsArgs } from "./args/PostCommentsArgs";
import { PostLikesArgs } from "./args/PostLikesArgs";
import { PostMessageArgs } from "./args/PostMessageArgs";
import { PostPhotosArgs } from "./args/PostPhotosArgs";
import { PostTagsArgs } from "./args/PostTagsArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Tag], {
    nullable: false,
  })
  async tags(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PostTagsArgs,
  ): Promise<Tag[]> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .tags(args);
  }

  @TypeGraphQL.FieldResolver(_type => Place, {
    nullable: true,
  })
  async place(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Place | null> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .place({});
  }

  @TypeGraphQL.FieldResolver(_type => Poll, {
    nullable: true,
  })
  async poll(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Poll | null> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .poll({});
  }

  @TypeGraphQL.FieldResolver(_type => [Photo], {
    nullable: false,
  })
  async photos(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PostPhotosArgs,
  ): Promise<Photo[]> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .photos(args);
  }

  @TypeGraphQL.FieldResolver(_type => Video, {
    nullable: true,
  })
  async video(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Video | null> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .video({});
  }

  @TypeGraphQL.FieldResolver(_type => Clip, {
    nullable: true,
  })
  async clip(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Clip | null> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .clip({});
  }

  @TypeGraphQL.FieldResolver(_type => Textual, {
    nullable: true,
  })
  async textual(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Textual | null> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .textual({});
  }

  @TypeGraphQL.FieldResolver(_type => Audio, {
    nullable: true,
  })
  async audio(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Audio | null> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .audio({});
  }

  @TypeGraphQL.FieldResolver(_type => [Like], {
    nullable: false,
  })
  async likes(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PostLikesArgs,
  ): Promise<Like[]> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false,
  })
  async comments(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PostCommentsArgs,
  ): Promise<Comment[]> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Activity], {
    nullable: false,
  })
  async activities(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PostActivitiesArgs,
  ): Promise<Activity[]> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .activities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false,
  })
  async message(
    @TypeGraphQL.Root() post: Post,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PostMessageArgs,
  ): Promise<Message[]> {
    return getPrismaFromContext(ctx)
      .post.findUnique({
        where: {
          id: post.id,
        },
      })
      .message(args);
  }
}
