import { Field, ObjectType } from "type-graphql";

@ObjectType()
class PaginationOutput {
  @Field(() => String)
  cursor: string;
}

export default PaginationOutput;
