import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedWhereInput } from "../../../inputs/BlockedWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBlockedArgs {
  @TypeGraphQL.Field(_type => BlockedWhereInput, {
    nullable: true,
  })
  where?: BlockedWhereInput | undefined;
}
