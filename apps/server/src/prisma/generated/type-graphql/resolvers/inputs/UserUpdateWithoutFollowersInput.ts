import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityUpdateManyWithoutUserInput } from "../inputs/ActivityUpdateManyWithoutUserInput";
import { BlockedUpdateManyWithoutSourceUserInput } from "../inputs/BlockedUpdateManyWithoutSourceUserInput";
import { BlockedUpdateManyWithoutTargetUserInput } from "../inputs/BlockedUpdateManyWithoutTargetUserInput";
import { BookmarkUpdateManyWithoutUserInput } from "../inputs/BookmarkUpdateManyWithoutUserInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CommentRepliesUpdateManyWithoutUserInput } from "../inputs/CommentRepliesUpdateManyWithoutUserInput";
import { CommentUpdateManyWithoutUserInput } from "../inputs/CommentUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAccountTypeFieldUpdateOperationsInput } from "../inputs/EnumAccountTypeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { FollowRequestUpdateManyWithoutSourceUserInput } from "../inputs/FollowRequestUpdateManyWithoutSourceUserInput";
import { FollowRequestUpdateManyWithoutTargetUserInput } from "../inputs/FollowRequestUpdateManyWithoutTargetUserInput";
import { FollowingUpdateManyWithoutUserInput } from "../inputs/FollowingUpdateManyWithoutUserInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutSourceUserInput } from "../inputs/MessageUpdateManyWithoutSourceUserInput";
import { MessageUpdateManyWithoutTargetUserInput } from "../inputs/MessageUpdateManyWithoutTargetUserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PollAnswerUpdateManyWithoutUserInput } from "../inputs/PollAnswerUpdateManyWithoutUserInput";
import { PostUpdateManyWithoutUserInput } from "../inputs/PostUpdateManyWithoutUserInput";
import { ProfileUpdateOneWithoutUserInput } from "../inputs/ProfileUpdateOneWithoutUserInput";
import { ReactionUpdateManyWithoutUserInput } from "../inputs/ReactionUpdateManyWithoutUserInput";
import { SettingsUpdateOneWithoutUserInput } from "../inputs/SettingsUpdateOneWithoutUserInput";
import { StoryUpdateManyWithoutUserInput } from "../inputs/StoryUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TokenUpdateManyWithoutUserInput } from "../inputs/TokenUpdateManyWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutFollowersInput", {
  isAbstract: true,
})
export class UserUpdateWithoutFollowersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  googleUserId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true,
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumAccountTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  accountType?: EnumAccountTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  isVerified?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  verificationExpires?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  loginAttempts?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  blockExpires?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  lastLogin?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TokenUpdateManyWithoutUserInput, {
    nullable: true,
  })
  tokens?: TokenUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutUserInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReactionUpdateManyWithoutUserInput, {
    nullable: true,
  })
  reactions?: ReactionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookmarkUpdateManyWithoutUserInput, {
    nullable: true,
  })
  bookmarks?: BookmarkUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowingUpdateManyWithoutUserInput, {
    nullable: true,
  })
  followings?: FollowingUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowRequestUpdateManyWithoutSourceUserInput, {
    nullable: true,
  })
  sentFollowRequests?:
    | FollowRequestUpdateManyWithoutSourceUserInput
    | undefined;

  @TypeGraphQL.Field(_type => FollowRequestUpdateManyWithoutTargetUserInput, {
    nullable: true,
  })
  receivedFollowRequests?:
    | FollowRequestUpdateManyWithoutTargetUserInput
    | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutSourceUserInput, {
    nullable: true,
  })
  sentMessages?: MessageUpdateManyWithoutSourceUserInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutTargetUserInput, {
    nullable: true,
  })
  receivedMessages?: MessageUpdateManyWithoutTargetUserInput | undefined;

  @TypeGraphQL.Field(_type => StoryUpdateManyWithoutUserInput, {
    nullable: true,
  })
  stories?: StoryUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ActivityUpdateManyWithoutUserInput, {
    nullable: true,
  })
  activities?: ActivityUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BlockedUpdateManyWithoutSourceUserInput, {
    nullable: true,
  })
  blockedBy?: BlockedUpdateManyWithoutSourceUserInput | undefined;

  @TypeGraphQL.Field(_type => BlockedUpdateManyWithoutTargetUserInput, {
    nullable: true,
  })
  blocked?: BlockedUpdateManyWithoutTargetUserInput | undefined;

  @TypeGraphQL.Field(_type => SettingsUpdateOneWithoutUserInput, {
    nullable: true,
  })
  settings?: SettingsUpdateOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerUpdateManyWithoutUserInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesUpdateManyWithoutUserInput, {
    nullable: true,
  })
  commentReplies?: CommentRepliesUpdateManyWithoutUserInput | undefined;
}
