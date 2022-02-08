import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutReplyToMessageInput } from "../inputs/MessageCreateWithoutReplyToMessageInput";
import { MessageUpdateWithoutReplyToMessageInput } from "../inputs/MessageUpdateWithoutReplyToMessageInput";

@TypeGraphQL.InputType("MessageUpsertWithoutReplyToMessageInput", {
  isAbstract: true,
})
export class MessageUpsertWithoutReplyToMessageInput {
  @TypeGraphQL.Field(_type => MessageUpdateWithoutReplyToMessageInput, {
    nullable: false,
  })
  update!: MessageUpdateWithoutReplyToMessageInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutReplyToMessageInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutReplyToMessageInput;
}
