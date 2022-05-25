import { MessageMediaType } from "@/prisma/generated/type-graphql";
import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class NewMessageInput {
  @Field(() => String, { nullable: true })
  @IsString()
  message?: string;

  @Field(() => String)
  @IsString()
  targetUserId: string;

  @Field(() => String, { nullable: true })
  @IsString()
  postId?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  storyId?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  replyToId?: string;

  @Field(() => MessageMediaType)
  @IsString()
  mediaType: MessageMediaType;
}
