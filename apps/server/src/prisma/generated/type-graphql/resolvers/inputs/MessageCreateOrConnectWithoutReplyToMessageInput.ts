import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutReplyToMessageInput } from "../inputs/MessageCreateWithoutReplyToMessageInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutReplyToMessageInput", {
  isAbstract: true,
})
export class MessageCreateOrConnectWithoutReplyToMessageInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutReplyToMessageInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutReplyToMessageInput;
}
