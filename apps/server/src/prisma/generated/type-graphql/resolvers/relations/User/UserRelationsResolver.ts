import * as TypeGraphQL from "type-graphql";
import { Activity } from "../../../models/Activity";
import { Blocked } from "../../../models/Blocked";
import { Bookmark } from "../../../models/Bookmark";
import { Comment } from "../../../models/Comment";
import { CommentReplies } from "../../../models/CommentReplies";
import { FollowRequest } from "../../../models/FollowRequest";
import { Follower } from "../../../models/Follower";
import { Following } from "../../../models/Following";
import { Message } from "../../../models/Message";
import { PollAnswer } from "../../../models/PollAnswer";
import { Post } from "../../../models/Post";
import { Profile } from "../../../models/Profile";
import { Reaction } from "../../../models/Reaction";
import { Settings } from "../../../models/Settings";
import { Story } from "../../../models/Story";
import { Token } from "../../../models/Token";
import { User } from "../../../models/User";
import { UserActivitiesArgs } from "./args/UserActivitiesArgs";
import { UserBlockedArgs } from "./args/UserBlockedArgs";
import { UserBlockedByArgs } from "./args/UserBlockedByArgs";
import { UserBookmarksArgs } from "./args/UserBookmarksArgs";
import { UserCommentRepliesArgs } from "./args/UserCommentRepliesArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingsArgs } from "./args/UserFollowingsArgs";
import { UserPollAnswersArgs } from "./args/UserPollAnswersArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserReactionsArgs } from "./args/UserReactionsArgs";
import { UserReceivedFollowRequestsArgs } from "./args/UserReceivedFollowRequestsArgs";
import { UserReceivedMessagesArgs } from "./args/UserReceivedMessagesArgs";
import { UserSentFollowRequestsArgs } from "./args/UserSentFollowRequestsArgs";
import { UserSentMessagesArgs } from "./args/UserSentMessagesArgs";
import { UserStoriesArgs } from "./args/UserStoriesArgs";
import { UserTokensArgs } from "./args/UserTokensArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Profile, {
    nullable: true,
  })
  async profile(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Profile | null> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .profile({});
  }

  @TypeGraphQL.FieldResolver(_type => [Token], {
    nullable: false,
  })
  async tokens(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserTokensArgs,
  ): Promise<Token[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .tokens(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserPostsArgs,
  ): Promise<Post[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .posts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Reaction], {
    nullable: false,
  })
  async reactions(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserReactionsArgs,
  ): Promise<Reaction[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .reactions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Bookmark], {
    nullable: false,
  })
  async bookmarks(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserBookmarksArgs,
  ): Promise<Bookmark[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .bookmarks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false,
  })
  async comments(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserCommentsArgs,
  ): Promise<Comment[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Follower], {
    nullable: false,
  })
  async followers(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserFollowersArgs,
  ): Promise<Follower[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .followers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Following], {
    nullable: false,
  })
  async followings(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserFollowingsArgs,
  ): Promise<Following[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .followings(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FollowRequest], {
    nullable: false,
  })
  async sentFollowRequests(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserSentFollowRequestsArgs,
  ): Promise<FollowRequest[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .sentFollowRequests(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FollowRequest], {
    nullable: false,
  })
  async receivedFollowRequests(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserReceivedFollowRequestsArgs,
  ): Promise<FollowRequest[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .receivedFollowRequests(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false,
  })
  async sentMessages(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserSentMessagesArgs,
  ): Promise<Message[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .sentMessages(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false,
  })
  async receivedMessages(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserReceivedMessagesArgs,
  ): Promise<Message[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .receivedMessages(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Story], {
    nullable: false,
  })
  async stories(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserStoriesArgs,
  ): Promise<Story[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .stories(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Activity], {
    nullable: false,
  })
  async activities(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserActivitiesArgs,
  ): Promise<Activity[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .activities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Blocked], {
    nullable: false,
  })
  async blockedBy(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserBlockedByArgs,
  ): Promise<Blocked[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .blockedBy(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Blocked], {
    nullable: false,
  })
  async blocked(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserBlockedArgs,
  ): Promise<Blocked[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .blocked(args);
  }

  @TypeGraphQL.FieldResolver(_type => Settings, {
    nullable: true,
  })
  async settings(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Settings | null> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .settings({});
  }

  @TypeGraphQL.FieldResolver(_type => [PollAnswer], {
    nullable: false,
  })
  async pollAnswers(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserPollAnswersArgs,
  ): Promise<PollAnswer[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .pollAnswers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CommentReplies], {
    nullable: false,
  })
  async commentReplies(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserCommentRepliesArgs,
  ): Promise<CommentReplies[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .commentReplies(args);
  }
}
