import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityListRelationFilter } from "../inputs/ActivityListRelationFilter";
import { BlockedListRelationFilter } from "../inputs/BlockedListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { CommentRepliesListRelationFilter } from "../inputs/CommentRepliesListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAccountTypeFilter } from "../inputs/EnumAccountTypeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { FollowRequestListRelationFilter } from "../inputs/FollowRequestListRelationFilter";
import { FollowerListRelationFilter } from "../inputs/FollowerListRelationFilter";
import { FollowingListRelationFilter } from "../inputs/FollowingListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LikeListRelationFilter } from "../inputs/LikeListRelationFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { PollAnswerListRelationFilter } from "../inputs/PollAnswerListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProfileRelationFilter } from "../inputs/ProfileRelationFilter";
import { SettingsRelationFilter } from "../inputs/SettingsRelationFilter";
import { StoryListRelationFilter } from "../inputs/StoryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TokenListRelationFilter } from "../inputs/TokenListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true,
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  googleUserId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true,
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAccountTypeFilter, {
    nullable: true,
  })
  accountType?: EnumAccountTypeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true,
  })
  isVerified?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  verificationExpires?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  loginAttempts?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  blockExpires?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true,
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  lastLogin?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ProfileRelationFilter, {
    nullable: true,
  })
  profile?: ProfileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TokenListRelationFilter, {
    nullable: true,
  })
  tokens?: TokenListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LikeListRelationFilter, {
    nullable: true,
  })
  likes?: LikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowerListRelationFilter, {
    nullable: true,
  })
  followers?: FollowerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowingListRelationFilter, {
    nullable: true,
  })
  followings?: FollowingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowRequestListRelationFilter, {
    nullable: true,
  })
  sentFollowRequests?: FollowRequestListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowRequestListRelationFilter, {
    nullable: true,
  })
  receivedFollowRequests?: FollowRequestListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true,
  })
  sentMessages?: MessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true,
  })
  receivedMessages?: MessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StoryListRelationFilter, {
    nullable: true,
  })
  stories?: StoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ActivityListRelationFilter, {
    nullable: true,
  })
  activities?: ActivityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BlockedListRelationFilter, {
    nullable: true,
  })
  blockedBy?: BlockedListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BlockedListRelationFilter, {
    nullable: true,
  })
  blocked?: BlockedListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SettingsRelationFilter, {
    nullable: true,
  })
  settings?: SettingsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PollAnswerListRelationFilter, {
    nullable: true,
  })
  pollAnswers?: PollAnswerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesListRelationFilter, {
    nullable: true,
  })
  commentReplies?: CommentRepliesListRelationFilter | undefined;
}
