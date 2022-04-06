import { ReactionType } from "@/prisma/generated/type-graphql";
import { IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
class PostReactionInput {
  @Field(() => String)
  @IsNotEmpty()
  readonly postId: string;

  @Field(() => ReactionType)
  @IsNotEmpty()
  readonly reactionType: ReactionType;
}

export default PostReactionInput;
