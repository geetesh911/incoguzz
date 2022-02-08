import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyActivityArgs {
  @TypeGraphQL.Field(_type => ActivityWhereInput, {
    nullable: true,
  })
  where?: ActivityWhereInput | undefined;
}
