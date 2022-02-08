import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyReplyToInputEnvelope } from "../inputs/MessageCreateManyReplyToInputEnvelope";
import { MessageCreateOrConnectWithoutReplyToInput } from "../inputs/MessageCreateOrConnectWithoutReplyToInput";
import { MessageCreateWithoutReplyToInput } from "../inputs/MessageCreateWithoutReplyToInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageCreateNestedManyWithoutReplyToInput", {
  isAbstract: true,
})
export class MessageCreateNestedManyWithoutReplyToInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutReplyToInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutReplyToInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyReplyToInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManyReplyToInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
