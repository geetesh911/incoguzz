import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutReplyToMessageInput } from "../inputs/MessageCreateOrConnectWithoutReplyToMessageInput";
import { MessageCreateWithoutReplyToMessageInput } from "../inputs/MessageCreateWithoutReplyToMessageInput";
import { MessageUpdateWithoutReplyToMessageInput } from "../inputs/MessageUpdateWithoutReplyToMessageInput";
import { MessageUpsertWithoutReplyToMessageInput } from "../inputs/MessageUpsertWithoutReplyToMessageInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateOneWithoutReplyToMessageInput", {
  isAbstract: true,
})
export class MessageUpdateOneWithoutReplyToMessageInput {
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

  @TypeGraphQL.Field(_type => MessageUpsertWithoutReplyToMessageInput, {
    nullable: true,
  })
  upsert?: MessageUpsertWithoutReplyToMessageInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutReplyToMessageInput, {
    nullable: true,
  })
  update?: MessageUpdateWithoutReplyToMessageInput | undefined;
}
