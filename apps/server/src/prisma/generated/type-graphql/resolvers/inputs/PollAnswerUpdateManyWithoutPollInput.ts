import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyPollInputEnvelope } from "../inputs/PollAnswerCreateManyPollInputEnvelope";
import { PollAnswerCreateOrConnectWithoutPollInput } from "../inputs/PollAnswerCreateOrConnectWithoutPollInput";
import { PollAnswerCreateWithoutPollInput } from "../inputs/PollAnswerCreateWithoutPollInput";
import { PollAnswerScalarWhereInput } from "../inputs/PollAnswerScalarWhereInput";
import { PollAnswerUpdateManyWithWhereWithoutPollInput } from "../inputs/PollAnswerUpdateManyWithWhereWithoutPollInput";
import { PollAnswerUpdateWithWhereUniqueWithoutPollInput } from "../inputs/PollAnswerUpdateWithWhereUniqueWithoutPollInput";
import { PollAnswerUpsertWithWhereUniqueWithoutPollInput } from "../inputs/PollAnswerUpsertWithWhereUniqueWithoutPollInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerUpdateManyWithoutPollInput", {
  isAbstract: true,
})
export class PollAnswerUpdateManyWithoutPollInput {
  @TypeGraphQL.Field(_type => [PollAnswerCreateWithoutPollInput], {
    nullable: true,
  })
  create?: PollAnswerCreateWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerCreateOrConnectWithoutPollInput], {
    nullable: true,
  })
  connectOrCreate?: PollAnswerCreateOrConnectWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [PollAnswerUpsertWithWhereUniqueWithoutPollInput],
    {
      nullable: true,
    },
  )
  upsert?: PollAnswerUpsertWithWhereUniqueWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => PollAnswerCreateManyPollInputEnvelope, {
    nullable: true,
  })
  createMany?: PollAnswerCreateManyPollInputEnvelope | undefined;

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
    _type => [PollAnswerUpdateWithWhereUniqueWithoutPollInput],
    {
      nullable: true,
    },
  )
  update?: PollAnswerUpdateWithWhereUniqueWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerUpdateManyWithWhereWithoutPollInput], {
    nullable: true,
  })
  updateMany?: PollAnswerUpdateManyWithWhereWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PollAnswerScalarWhereInput[] | undefined;
}
