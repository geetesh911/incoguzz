import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageMediaType } from "../../enums/MessageMediaType";

@TypeGraphQL.InputType("MessageCreateManySourceUserInput", {
  isAbstract: true,
})
export class MessageCreateManySourceUserInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mediaThumbnailUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  postId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  storyId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  targetUserId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  replyToId?: string | undefined;

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
}
