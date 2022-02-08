import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyReplyToInputEnvelope } from "../inputs/MessageCreateManyReplyToInputEnvelope";
import { MessageCreateOrConnectWithoutReplyToInput } from "../inputs/MessageCreateOrConnectWithoutReplyToInput";
import { MessageCreateWithoutReplyToInput } from "../inputs/MessageCreateWithoutReplyToInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutReplyToInput } from "../inputs/MessageUpdateManyWithWhereWithoutReplyToInput";
import { MessageUpdateWithWhereUniqueWithoutReplyToInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutReplyToInput";
import { MessageUpsertWithWhereUniqueWithoutReplyToInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutReplyToInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutReplyToInput", {
  isAbstract: true,
})
export class MessageUpdateManyWithoutReplyToInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutReplyToInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutReplyToInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [MessageUpsertWithWhereUniqueWithoutReplyToInput],
    {
      nullable: true,
    },
  )
  upsert?: MessageUpsertWithWhereUniqueWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyReplyToInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManyReplyToInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  set?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  delete?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [MessageUpdateWithWhereUniqueWithoutReplyToInput],
    {
      nullable: true,
    },
  )
  update?: MessageUpdateWithWhereUniqueWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutReplyToInput], {
    nullable: true,
  })
  updateMany?: MessageUpdateManyWithWhereWithoutReplyToInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
