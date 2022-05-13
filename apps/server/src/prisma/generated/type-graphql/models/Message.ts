import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { Story } from "../models/Story";
import { User } from "../models/User";
import { MessageMediaType } from "../enums/MessageMediaType";
import { MessageCount } from "../resolvers/outputs/MessageCount";

@TypeGraphQL.ObjectType("Message", {
  isAbstract: true,
})
export class Message {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  message?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mediaUrl?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mediaThumbnailUrl?: string | null;

  post?: Post | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  postId?: string | null;

  story?: Story | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  storyId?: string | null;

  sourceUser?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  sourceUserId!: string;

  targetUser?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  targetUserId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  replyToId?: string | null;

  replyTo?: Message | null;

  replyToMessage?: Message[];

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

  @TypeGraphQL.Field(_type => MessageCount, {
    nullable: true,
  })
  _count?: MessageCount | null;
}
