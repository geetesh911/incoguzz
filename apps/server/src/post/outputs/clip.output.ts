import { ClipAudio } from "@/prisma/generated/type-graphql";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
class ClipOutput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => String, { nullable: false })
  thumbnailUrl!: string;

  @Field(() => ClipAudio, { nullable: false })
  clipAudio?: ClipAudio;
}

export default ClipOutput;
