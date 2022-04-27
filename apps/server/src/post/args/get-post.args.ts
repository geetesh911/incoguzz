import PaginationInput from "@/common/inputs/pagination.input";
import { IsString } from "class-validator";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
class GetRelatedPostsArgs {
  @Field(() => PaginationInput)
  paginationInput: PaginationInput;

  @Field(() => String, { nullable: false })
  @IsString()
  postId: string;
}

export default GetRelatedPostsArgs;
