import PaginatedResponse from "@/common/generic-types/pagination-response.generic";
import {
  Message,
  MessageMediaType,
  Post,
  Story,
  User,
} from "@/prisma/generated/type-graphql";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MessageOutput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  message?: string | null;

  @Field(() => String, { nullable: true })
  mediaUrl?: string | null;

  @Field(() => String, { nullable: true })
  mediaThumbnailUrl?: string | null;

  @Field(() => Post, { nullable: true })
  post?: Post | null;

  @Field(() => Story, { nullable: true })
  story?: Story | null;

  @Field(() => User, { nullable: false })
  sourceUser?: User;

  @Field(() => User, { nullable: false })
  targetUser?: User;

  @Field(() => Message, { nullable: false })
  replyTo?: Message | null;

  @Field(() => MessageMediaType, { nullable: false })
  mediaType!:
    | "TEXT"
    | "IMAGE"
    | "VIDEO"
    | "AUDIO"
    | "DOCUMENT"
    | "POST"
    | "STORY";

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}

@ObjectType()
export class GetMessagesOuput extends PaginatedResponse(MessageOutput) {}
