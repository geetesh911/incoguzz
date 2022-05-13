import { Field, ObjectType } from "type-graphql";

@ObjectType()
class PaginationOutput {
  @Field(() => String, { nullable: true })
  cursor?: string;
}

export default PaginationOutput;
