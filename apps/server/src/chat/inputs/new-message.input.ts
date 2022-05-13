import { MessageMediaType } from "@/prisma/generated/type-graphql";
import { IsString, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class NewMessageInput {
  @Field(() => String)
  @IsString()
  @MaxLength(2000)
  message?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  targetUserId?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  postId?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  storyId?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  replyToId?: string;

  @Field(() => MessageMediaType, { nullable: true })
  @IsString()
  mediaType: MessageMediaType;
}
