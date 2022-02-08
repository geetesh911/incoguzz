import { PollOption } from "@/prisma/generated/type-graphql";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
class PollOutput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  question!: string;

  @Field(() => String, { nullable: false })
  postId!: string;

  @Field(() => [PollOption], { nullable: false })
  pollOptions?: PollOption[];
}

export default PollOutput;
