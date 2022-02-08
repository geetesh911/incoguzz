import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyTargetUserInputEnvelope } from "../inputs/MessageCreateManyTargetUserInputEnvelope";
import { MessageCreateOrConnectWithoutTargetUserInput } from "../inputs/MessageCreateOrConnectWithoutTargetUserInput";
import { MessageCreateWithoutTargetUserInput } from "../inputs/MessageCreateWithoutTargetUserInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutTargetUserInput } from "../inputs/MessageUpdateManyWithWhereWithoutTargetUserInput";
import { MessageUpdateWithWhereUniqueWithoutTargetUserInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutTargetUserInput";
import { MessageUpsertWithWhereUniqueWithoutTargetUserInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutTargetUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType("MessageUpdateManyWithoutTargetUserInput", {
  isAbstract: true,
})
export class MessageUpdateManyWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutTargetUserInput], {
    nullable: true,
  })
  create?: MessageCreateWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutTargetUserInput], {
    nullable: true,
  })
  connectOrCreate?: MessageCreateOrConnectWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [MessageUpsertWithWhereUniqueWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  upsert?: MessageUpsertWithWhereUniqueWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManyTargetUserInputEnvelope, {
    nullable: true,
  })
  createMany?: MessageCreateManyTargetUserInputEnvelope | undefined;

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
    _type => [MessageUpdateWithWhereUniqueWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  update?: MessageUpdateWithWhereUniqueWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [MessageUpdateManyWithWhereWithoutTargetUserInput],
    {
      nullable: true,
    },
  )
  updateMany?: MessageUpdateManyWithWhereWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
