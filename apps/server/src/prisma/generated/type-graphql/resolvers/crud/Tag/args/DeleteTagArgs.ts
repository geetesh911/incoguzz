import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagWhereUniqueInput } from "../../../inputs/TagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTagArgs {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false,
  })
  where!: TagWhereUniqueInput;
}
