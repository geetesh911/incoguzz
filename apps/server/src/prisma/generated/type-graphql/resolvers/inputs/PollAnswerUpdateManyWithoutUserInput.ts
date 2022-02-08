import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyUserInputEnvelope } from "../inputs/PollAnswerCreateManyUserInputEnvelope";
import { PollAnswerCreateOrConnectWithoutUserInput } from "../inputs/PollAnswerCreateOrConnectWithoutUserInput";
import { PollAnswerCreateWithoutUserInput } from "../inputs/PollAnswerCreateWithoutUserInput";
import { PollAnswerScalarWhereInput } from "../inputs/PollAnswerScalarWhereInput";
import { PollAnswerUpdateManyWithWhereWithoutUserInput } from "../inputs/PollAnswerUpdateManyWithWhereWithoutUserInput";
import { PollAnswerUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PollAnswerUpdateWithWhereUniqueWithoutUserInput";
import { PollAnswerUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PollAnswerUpsertWithWhereUniqueWithoutUserInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class PollAnswerUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PollAnswerCreateWithoutUserInput], {
    nullable: true,
  })
  create?: PollAnswerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: PollAnswerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [PollAnswerUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: PollAnswerUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PollAnswerCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: PollAnswerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereUniqueInput], {
    nullable: true,
  })
  set?: PollAnswerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PollAnswerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereUniqueInput], {
    nullable: true,
  })
  delete?: PollAnswerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereUniqueInput], {
    nullable: true,
  })
  connect?: PollAnswerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [PollAnswerUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: PollAnswerUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: PollAnswerUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PollAnswerScalarWhereInput[] | undefined;
}
