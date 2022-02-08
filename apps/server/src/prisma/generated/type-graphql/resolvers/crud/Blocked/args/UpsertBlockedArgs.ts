import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedCreateInput } from "../../../inputs/BlockedCreateInput";
import { BlockedUpdateInput } from "../../../inputs/BlockedUpdateInput";
import { BlockedWhereUniqueInput } from "../../../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBlockedArgs {
  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlockedCreateInput, {
    nullable: false,
  })
  create!: BlockedCreateInput;

  @TypeGraphQL.Field(_type => BlockedUpdateInput, {
    nullable: false,
  })
  update!: BlockedUpdateInput;
}
