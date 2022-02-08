import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateNestedManyWithoutSourceUserInput } from "../inputs/BlockedCreateNestedManyWithoutSourceUserInput";
import { BlockedCreateNestedManyWithoutTargetUserInput } from "../inputs/BlockedCreateNestedManyWithoutTargetUserInput";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { CommentRepliesCreateNestedManyWithoutUserInput } from "../inputs/CommentRepliesCreateNestedManyWithoutUserInput";
import { FollowRequestCreateNestedManyWithoutSourceUserInput } from "../inputs/FollowRequestCreateNestedManyWithoutSourceUserInput";
import { FollowRequestCreateNestedManyWithoutTargetUserInput } from "../inputs/FollowRequestCreateNestedManyWithoutTargetUserInput";
import { FollowerCreateNestedManyWithoutUserInput } from "../inputs/FollowerCreateNestedManyWithoutUserInput";
import { FollowingCreateNestedManyWithoutUserInput } from "../inputs/FollowingCreateNestedManyWithoutUserInput";
import { LikeCreateNestedManyWithoutUserInput } from "../inputs/LikeCreateNestedManyWithoutUserInput";
import { MessageCreateNestedManyWithoutSourceUserInput } from "../inputs/MessageCreateNestedManyWithoutSourceUserInput";
import { MessageCreateNestedManyWithoutTargetUserInput } from "../inputs/MessageCreateNestedManyWithoutTargetUserInput";
import { PollAnswerCreateNestedManyWithoutUserInput } from "../inputs/PollAnswerCreateNestedManyWithoutUserInput";
import { PostCreateNestedManyWithoutUserInput } from "../inputs/PostCreateNestedManyWithoutUserInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
import { SettingsCreateNestedOneWithoutUserInput } from "../inputs/SettingsCreateNestedOneWithoutUserInput";
import { StoryCreateNestedManyWithoutUserInput } from "../inputs/StoryCreateNestedManyWithoutUserInput";
import { TokenCreateNestedManyWithoutUserInput } from "../inputs/TokenCreateNestedManyWithoutUserInput";
import { AccountType } from "../../enums/AccountType";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutActivitiesInput", {
  isAbstract: true,
})
export class UserCreateWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  googleUserId?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => AccountType, {
    nullable: true,
  })
  accountType?: "PUBLIC" | "ANONYMOUS" | "PRIVATE" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  isVerified?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  verificationExpires?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  loginAttempts?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  blockExpires?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  lastLogin?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput, {
    nullable: true,
  })
  profile?: ProfileCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TokenCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  tokens?: TokenCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowerCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  followers?: FollowerCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowingCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  followings?: FollowingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(
    _type => FollowRequestCreateNestedManyWithoutSourceUserInput,
    {
      nullable: true,
    },
  )
  sentFollowRequests?:
    | FollowRequestCreateNestedManyWithoutSourceUserInput
    | undefined;

  @TypeGraphQL.Field(
    _type => FollowRequestCreateNestedManyWithoutTargetUserInput,
    {
      nullable: true,
    },
  )
  receivedFollowRequests?:
    | FollowRequestCreateNestedManyWithoutTargetUserInput
    | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutSourceUserInput, {
    nullable: true,
  })
  sentMessages?: MessageCreateNestedManyWithoutSourceUserInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutTargetUserInput, {
    nullable: true,
  })
  receivedMessages?: MessageCreateNestedManyWithoutTargetUserInput | undefined;

  @TypeGraphQL.Field(_type => StoryCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  stories?: StoryCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BlockedCreateNestedManyWithoutSourceUserInput, {
    nullable: true,
  })
  blockedBy?: BlockedCreateNestedManyWithoutSourceUserInput | undefined;

  @TypeGraphQL.Field(_type => BlockedCreateNestedManyWithoutTargetUserInput, {
    nullable: true,
  })
  blocked?: BlockedCreateNestedManyWithoutTargetUserInput | undefined;

  @TypeGraphQL.Field(_type => SettingsCreateNestedOneWithoutUserInput, {
    nullable: true,
  })
  settings?: SettingsCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  commentReplies?: CommentRepliesCreateNestedManyWithoutUserInput | undefined;
}
