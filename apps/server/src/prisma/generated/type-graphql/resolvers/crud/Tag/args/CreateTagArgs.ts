import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagCreateInput } from "../../../inputs/TagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTagArgs {
  @TypeGraphQL.Field(_type => TagCreateInput, {
    nullable: false,
  })
  data!: TagCreateInput;
}
