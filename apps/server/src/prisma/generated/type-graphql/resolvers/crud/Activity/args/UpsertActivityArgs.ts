import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityCreateInput } from "../../../inputs/ActivityCreateInput";
import { ActivityUpdateInput } from "../../../inputs/ActivityUpdateInput";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertActivityArgs {
  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityCreateInput, {
    nullable: false,
  })
  create!: ActivityCreateInput;

  @TypeGraphQL.Field(_type => ActivityUpdateInput, {
    nullable: false,
  })
  update!: ActivityUpdateInput;
}
