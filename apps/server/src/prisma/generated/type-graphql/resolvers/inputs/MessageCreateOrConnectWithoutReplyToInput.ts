import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutReplyToInput } from "../inputs/MessageCreateWithoutReplyToInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateOrConnectWithoutReplyToInput", {
  isAbstract: true,
})
export class MessageCreateOrConnectWithoutReplyToInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutReplyToInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutReplyToInput;
}
