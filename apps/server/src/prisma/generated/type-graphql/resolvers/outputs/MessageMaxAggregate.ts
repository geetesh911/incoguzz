import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageMediaType } from "../../enums/MessageMediaType";

@TypeGraphQL.ObjectType("MessageMaxAggregate", {
  isAbstract: true,
})
export class MessageMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  message!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mediaUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mediaThumbnailUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  postId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  storyId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  sourceUserId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  targetUserId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  replyToId!: string | null;

  @TypeGraphQL.Field(_type => MessageMediaType, {
    nullable: true,
  })
  mediaType!:
    | "TEXT"
    | "IMAGE"
    | "VIDEO"
    | "AUDIO"
    | "DOCUMENT"
    | "POST"
    | "STORY"
    | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}
