import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateManyPollInputEnvelope } from "../inputs/PollOptionCreateManyPollInputEnvelope";
import { PollOptionCreateOrConnectWithoutPollInput } from "../inputs/PollOptionCreateOrConnectWithoutPollInput";
import { PollOptionCreateWithoutPollInput } from "../inputs/PollOptionCreateWithoutPollInput";
import { PollOptionScalarWhereInput } from "../inputs/PollOptionScalarWhereInput";
import { PollOptionUpdateManyWithWhereWithoutPollInput } from "../inputs/PollOptionUpdateManyWithWhereWithoutPollInput";
import { PollOptionUpdateWithWhereUniqueWithoutPollInput } from "../inputs/PollOptionUpdateWithWhereUniqueWithoutPollInput";
import { PollOptionUpsertWithWhereUniqueWithoutPollInput } from "../inputs/PollOptionUpsertWithWhereUniqueWithoutPollInput";
import { PollOptionWhereUniqueInput } from "../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.InputType("PollOptionUpdateManyWithoutPollInput", {
  isAbstract: true,
})
export class PollOptionUpdateManyWithoutPollInput {
  @TypeGraphQL.Field(_type => [PollOptionCreateWithoutPollInput], {
    nullable: true,
  })
  create?: PollOptionCreateWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionCreateOrConnectWithoutPollInput], {
    nullable: true,
  })
  connectOrCreate?: PollOptionCreateOrConnectWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [PollOptionUpsertWithWhereUniqueWithoutPollInput],
    {
      nullable: true,
    },
  )
  upsert?: PollOptionUpsertWithWhereUniqueWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => PollOptionCreateManyPollInputEnvelope, {
    nullable: true,
  })
  createMany?: PollOptionCreateManyPollInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PollOptionWhereUniqueInput], {
    nullable: true,
  })
  set?: PollOptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PollOptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionWhereUniqueInput], {
    nullable: true,
  })
  delete?: PollOptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionWhereUniqueInput], {
    nullable: true,
  })
  connect?: PollOptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    _type => [PollOptionUpdateWithWhereUniqueWithoutPollInput],
    {
      nullable: true,
    },
  )
  update?: PollOptionUpdateWithWhereUniqueWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionUpdateManyWithWhereWithoutPollInput], {
    nullable: true,
  })
  updateMany?: PollOptionUpdateManyWithWhereWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PollOptionScalarWhereInput[] | undefined;
}
