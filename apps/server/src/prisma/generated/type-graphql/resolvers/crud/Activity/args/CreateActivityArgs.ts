import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityCreateInput } from "../../../inputs/ActivityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateActivityArgs {
  @TypeGraphQL.Field(_type => ActivityCreateInput, {
    nullable: false,
  })
  data!: ActivityCreateInput;
}
