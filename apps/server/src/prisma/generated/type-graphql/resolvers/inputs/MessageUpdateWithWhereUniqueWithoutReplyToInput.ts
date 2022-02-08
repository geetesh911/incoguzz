import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageUpdateWithoutReplyToInput } from "../inputs/MessageUpdateWithoutReplyToInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutReplyToInput", {
  isAbstract: true,
})
export class MessageUpdateWithWhereUniqueWithoutReplyToInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false,
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutReplyToInput, {
    nullable: false,
  })
  data!: MessageUpdateWithoutReplyToInput;
}
