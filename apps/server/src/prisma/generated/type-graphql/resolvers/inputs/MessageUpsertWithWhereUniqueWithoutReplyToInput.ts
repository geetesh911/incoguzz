import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutReplyToInput } from "../inputs/MessageCreateWithoutReplyToInput";
import { MessageUpdateWithoutReplyToInput } from "../inputs/MessageUpdateWithoutReplyToInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutReplyToInput", {
  isAbstract: true,
})
export class MessageUpsertWithWhereUniqueWithoutReplyToInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutReplyToInput, {
    nullable: false,
  })
  update!: MessageUpdateWithoutReplyToInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutReplyToInput, {
    nullable: false,
  })
  create!: MessageCreateWithoutReplyToInput;
}
