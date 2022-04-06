import { Reaction } from "@/prisma/generated/type-graphql";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
class ReactionOutput extends Reaction {
  @Field(() => Boolean, { nullable: false })
  readonly deleted: boolean;
}

export default ReactionOutput;
