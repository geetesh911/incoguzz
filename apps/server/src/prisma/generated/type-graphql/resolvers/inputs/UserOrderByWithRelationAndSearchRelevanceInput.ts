import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityOrderByRelationAggregateInput } from "../inputs/ActivityOrderByRelationAggregateInput";
import { BlockedOrderByRelationAggregateInput } from "../inputs/BlockedOrderByRelationAggregateInput";
import { BookmarkOrderByRelationAggregateInput } from "../inputs/BookmarkOrderByRelationAggregateInput";
import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { CommentRepliesOrderByRelationAggregateInput } from "../inputs/CommentRepliesOrderByRelationAggregateInput";
import { FollowRequestOrderByRelationAggregateInput } from "../inputs/FollowRequestOrderByRelationAggregateInput";
import { FollowerOrderByRelationAggregateInput } from "../inputs/FollowerOrderByRelationAggregateInput";
import { FollowingOrderByRelationAggregateInput } from "../inputs/FollowingOrderByRelationAggregateInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { PollAnswerOrderByRelationAggregateInput } from "../inputs/PollAnswerOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ProfileOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProfileOrderByWithRelationAndSearchRelevanceInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { SettingsOrderByWithRelationAndSearchRelevanceInput } from "../inputs/SettingsOrderByWithRelationAndSearchRelevanceInput";
import { StoryOrderByRelationAggregateInput } from "../inputs/StoryOrderByRelationAggregateInput";
import { TokenOrderByRelationAggregateInput } from "../inputs/TokenOrderByRelationAggregateInput";
import { UserOrderByRelevanceInput } from "../inputs/UserOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class UserOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  googleUserId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  accountType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  isVerified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  verificationExpires?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  loginAttempts?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  blockExpires?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  lastLogin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(
    _type => ProfileOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  profile?: ProfileOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => TokenOrderByRelationAggregateInput, {
    nullable: true,
  })
  tokens?: TokenOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true,
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOrderByRelationAggregateInput, {
    nullable: true,
  })
  reactions?: ReactionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkOrderByRelationAggregateInput, {
    nullable: true,
  })
  bookmarks?: BookmarkOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput, {
    nullable: true,
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerOrderByRelationAggregateInput, {
    nullable: true,
  })
  followers?: FollowerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowingOrderByRelationAggregateInput, {
    nullable: true,
  })
  followings?: FollowingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowRequestOrderByRelationAggregateInput, {
    nullable: true,
  })
  sentFollowRequests?: FollowRequestOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowRequestOrderByRelationAggregateInput, {
    nullable: true,
  })
  receivedFollowRequests?:
    | FollowRequestOrderByRelationAggregateInput
    | undefined;

  @TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput, {
    nullable: true,
  })
  sentMessages?: MessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput, {
    nullable: true,
  })
  receivedMessages?: MessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StoryOrderByRelationAggregateInput, {
    nullable: true,
  })
  stories?: StoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActivityOrderByRelationAggregateInput, {
    nullable: true,
  })
  activities?: ActivityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockedOrderByRelationAggregateInput, {
    nullable: true,
  })
  blockedBy?: BlockedOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BlockedOrderByRelationAggregateInput, {
    nullable: true,
  })
  blocked?: BlockedOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(
    _type => SettingsOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  settings?: SettingsOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerOrderByRelationAggregateInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesOrderByRelationAggregateInput, {
    nullable: true,
  })
  commentReplies?: CommentRepliesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: UserOrderByRelevanceInput | undefined;
}
