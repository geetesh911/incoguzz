import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityUpdateInput } from "../../../inputs/ActivityUpdateInput";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateActivityArgs {
  @TypeGraphQL.Field(_type => ActivityUpdateInput, {
    nullable: false,
  })
  data!: ActivityUpdateInput;

  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;
}
