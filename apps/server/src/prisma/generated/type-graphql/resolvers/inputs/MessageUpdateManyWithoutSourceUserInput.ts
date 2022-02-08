import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySourceUserInputEnvelope } from "../inputs/MessageCreateManySourceUserInputEnvelope";
import { MessageCreateOrConnectWithoutSourceUserInput } from "../inputs/MessageCreateOrConnectWithoutSourceUserInput";
import { MessageCreateWithoutSourceUserInput } from "../inputs/MessageCreateWithoutSourceUserInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutSourceUserInput } from "../inputs/MessageUpdateManyWithWhereWithoutSourceUserInput";
import { MessageUpdateWithWhereUniqueWithoutSourceUserInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutSourceUserInput";
import { MessageUpsertWithWhereUniqueWithoutSourceUserInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutSourceUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutSourceUserInput", {
  isAbstract: true,
})
export class MessageUpdateManyWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutSourceUserInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutSourceUserInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [MessageUpsertWithWhereUniqueWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  upsert?: MessageUpsertWithWhereUniqueWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManySourceUserInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManySourceUserInputEnvelope | undefined;

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
    _type => [MessageUpdateWithWhereUniqueWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  update?: MessageUpdateWithWhereUniqueWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [MessageUpdateManyWithWhereWithoutSourceUserInput],
    {
      nullable: true,
    },
  )
  updateMany?: MessageUpdateManyWithWhereWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
