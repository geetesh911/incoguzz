import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyPollInputEnvelope } from "../inputs/PollAnswerCreateManyPollInputEnvelope";
import { PollAnswerCreateOrConnectWithoutPollInput } from "../inputs/PollAnswerCreateOrConnectWithoutPollInput";
import { PollAnswerCreateWithoutPollInput } from "../inputs/PollAnswerCreateWithoutPollInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerCreateNestedManyWithoutPollInput", {
  isAbstract: true,
})
export class PollAnswerCreateNestedManyWithoutPollInput {
  @TypeGraphQL.Field(_type => [PollAnswerCreateWithoutPollInput], {
    nullable: true,
  })
  create?: PollAnswerCreateWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerCreateOrConnectWithoutPollInput], {
    nullable: true,
  })
  connectOrCreate?: PollAnswerCreateOrConnectWithoutPollInput[] | undefined;

  @TypeGraphQL.Field(_type => PollAnswerCreateManyPollInputEnvelope, {
    nullable: true,
  })
  createMany?: PollAnswerCreateManyPollInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereUniqueInput], {
    nullable: true,
  })
  connect?: PollAnswerWhereUniqueInput[] | undefined;
}
