import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyPollOptionInputEnvelope } from "../inputs/PollAnswerCreateManyPollOptionInputEnvelope";
import { PollAnswerCreateOrConnectWithoutPollOptionInput } from "../inputs/PollAnswerCreateOrConnectWithoutPollOptionInput";
import { PollAnswerCreateWithoutPollOptionInput } from "../inputs/PollAnswerCreateWithoutPollOptionInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerCreateNestedManyWithoutPollOptionInput", {
  isAbstract: true,
})
export class PollAnswerCreateNestedManyWithoutPollOptionInput {
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

  @TypeGraphQL.Field(_type => PollAnswerCreateManyPollOptionInputEnvelope, {
    nullable: true,
  })
  createMany?: PollAnswerCreateManyPollOptionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereUniqueInput], {
    nullable: true,
  })
  connect?: PollAnswerWhereUniqueInput[] | undefined;
}
