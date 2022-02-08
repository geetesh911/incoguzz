import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyPollOptionInputEnvelope } from "../inputs/PollAnswerCreateManyPollOptionInputEnvelope";
import { PollAnswerCreateOrConnectWithoutPollOptionInput } from "../inputs/PollAnswerCreateOrConnectWithoutPollOptionInput";
import { PollAnswerCreateWithoutPollOptionInput } from "../inputs/PollAnswerCreateWithoutPollOptionInput";
import { PollAnswerScalarWhereInput } from "../inputs/PollAnswerScalarWhereInput";
import { PollAnswerUpdateManyWithWhereWithoutPollOptionInput } from "../inputs/PollAnswerUpdateManyWithWhereWithoutPollOptionInput";
import { PollAnswerUpdateWithWhereUniqueWithoutPollOptionInput } from "../inputs/PollAnswerUpdateWithWhereUniqueWithoutPollOptionInput";
import { PollAnswerUpsertWithWhereUniqueWithoutPollOptionInput } from "../inputs/PollAnswerUpsertWithWhereUniqueWithoutPollOptionInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerUpdateManyWithoutPollOptionInput", {
  isAbstract: true,
})
export class PollAnswerUpdateManyWithoutPollOptionInput {
  @TypeGraphQL.Field(_type => [PollAnswerCreateWithoutPollOptionInput], {
    nullable: true,
  })
  create?: PollAnswerCreateWithoutPollOptionInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [PollAnswerCreateOrConnectWithoutPollOptionInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?:
    | PollAnswerCreateOrConnectWithoutPollOptionInput[]
    | undefined;

  @TypeGraphQL.Field(
    _type => [PollAnswerUpsertWithWhereUniqueWithoutPollOptionInput],
    {
      nullable: true,
    },
  )
  upsert?: PollAnswerUpsertWithWhereUniqueWithoutPollOptionInput[] | undefined;

  @TypeGraphQL.Field(_type => PollAnswerCreateManyPollOptionInputEnvelope, {
    nullable: true,
  })
  createMany?: PollAnswerCreateManyPollOptionInputEnvelope | undefined;

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
    _type => [PollAnswerUpdateWithWhereUniqueWithoutPollOptionInput],
    {
      nullable: true,
    },
  )
  update?: PollAnswerUpdateWithWhereUniqueWithoutPollOptionInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [PollAnswerUpdateManyWithWhereWithoutPollOptionInput],
    {
      nullable: true,
    },
  )
  updateMany?:
    | PollAnswerUpdateManyWithWhereWithoutPollOptionInput[]
    | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PollAnswerScalarWhereInput[] | undefined;
}
