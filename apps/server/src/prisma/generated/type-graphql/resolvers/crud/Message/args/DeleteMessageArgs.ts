import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMessageArgs {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;
}
