import PaginationInput from "@/common/inputs/pagination.input";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetMessageArgs {
  @Field(() => String)
  targetUserId: string;

  @Field(() => PaginationInput)
  paginationInput: PaginationInput;
}
