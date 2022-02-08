import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedUpdateInput } from "../../../inputs/BlockedUpdateInput";
import { BlockedWhereUniqueInput } from "../../../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBlockedArgs {
  @TypeGraphQL.Field(_type => BlockedUpdateInput, {
    nullable: false,
  })
  data!: BlockedUpdateInput;

  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;
}
