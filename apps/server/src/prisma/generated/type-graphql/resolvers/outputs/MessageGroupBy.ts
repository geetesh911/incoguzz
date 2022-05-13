import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";
import { MessageMediaType } from "../../enums/MessageMediaType";

@TypeGraphQL.ObjectType("MessageGroupBy", {
  isAbstract: true,
})
export class MessageGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

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
    nullable: false,
  })
  sourceUserId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  targetUserId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  replyToId!: string | null;

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
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => MessageCountAggregate, {
    nullable: true,
  })
  _count!: MessageCountAggregate | null;

  @TypeGraphQL.Field(_type => MessageMinAggregate, {
    nullable: true,
  })
  _min!: MessageMinAggregate | null;

  @TypeGraphQL.Field(_type => MessageMaxAggregate, {
    nullable: true,
  })
  _max!: MessageMaxAggregate | null;
}
