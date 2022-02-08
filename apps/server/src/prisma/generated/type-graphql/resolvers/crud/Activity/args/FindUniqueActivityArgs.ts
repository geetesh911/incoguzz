import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueActivityArgs {
  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;
}
