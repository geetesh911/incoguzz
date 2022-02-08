import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedWhereUniqueInput } from "../../../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBlockedArgs {
  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: false,
  })
  where!: BlockedWhereUniqueInput;
}
