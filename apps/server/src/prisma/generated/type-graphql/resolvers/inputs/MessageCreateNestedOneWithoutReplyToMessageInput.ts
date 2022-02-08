import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutReplyToMessageInput } from "../inputs/MessageCreateOrConnectWithoutReplyToMessageInput";
import { MessageCreateWithoutReplyToMessageInput } from "../inputs/MessageCreateWithoutReplyToMessageInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedOneWithoutReplyToMessageInput", {
  isAbstract: true,
})
export class MessageCreateNestedOneWithoutReplyToMessageInput {
  @TypeGraphQL.Field(_type => MessageCreateWithoutReplyToMessageInput, {
    nullable: true,
  })
  create?: MessageCreateWithoutReplyToMessageInput | undefined;

  @TypeGraphQL.Field(
    _type => MessageCreateOrConnectWithoutReplyToMessageInput,
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | MessageCreateOrConnectWithoutReplyToMessageInput
    | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput | undefined;
}
