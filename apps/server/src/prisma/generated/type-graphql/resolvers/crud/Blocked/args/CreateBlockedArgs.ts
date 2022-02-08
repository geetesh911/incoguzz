import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedCreateInput } from "../../../inputs/BlockedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBlockedArgs {
  @TypeGraphQL.Field(_type => BlockedCreateInput, {
    nullable: false,
  })
  data!: BlockedCreateInput;
}
