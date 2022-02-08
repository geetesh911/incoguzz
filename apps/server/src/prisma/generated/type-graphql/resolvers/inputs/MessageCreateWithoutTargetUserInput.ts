import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutReplyToInput } from "../inputs/MessageCreateNestedManyWithoutReplyToInput";
import { MessageCreateNestedOneWithoutReplyToMessageInput } from "../inputs/MessageCreateNestedOneWithoutReplyToMessageInput";
import { PostCreateNestedOneWithoutMessageInput } from "../inputs/PostCreateNestedOneWithoutMessageInput";
import { StoryCreateNestedOneWithoutMessageInput } from "../inputs/StoryCreateNestedOneWithoutMessageInput";
import { UserCreateNestedOneWithoutSentMessagesInput } from "../inputs/UserCreateNestedOneWithoutSentMessagesInput";
import { MessageMediaType } from "../../enums/MessageMediaType";

@TypeGraphQL.InputType("MessageCreateWithoutTargetUserInput", {
  isAbstract: true,
})
export class MessageCreateWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mediaUrl?: string | undefined;

  @TypeGraphQL.Field(_type => MessageMediaType, {
    nullable: false,
  })
  mediaType!:
    | "TEXT"
    | "IMAGE"
    | "VIDEO"
    | "AUDIO"
    | "DOCUMENT"
    | "POST"
    | "STORY";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutMessageInput, {
    nullable: true,
  })
  post?: PostCreateNestedOneWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => StoryCreateNestedOneWithoutMessageInput, {
    nullable: true,
  })
  story?: StoryCreateNestedOneWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSentMessagesInput, {
    nullable: false,
  })
  sourceUser!: UserCreateNestedOneWithoutSentMessagesInput;

  @TypeGraphQL.Field(
    _type => MessageCreateNestedOneWithoutReplyToMessageInput,
    {
      nullable: true,
    },
  )
  replyTo?: MessageCreateNestedOneWithoutReplyToMessageInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutReplyToInput, {
    nullable: true,
  })
  replyToMessage?: MessageCreateNestedManyWithoutReplyToInput | undefined;
}
