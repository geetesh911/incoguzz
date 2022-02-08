import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyUserInputEnvelope } from "../inputs/PollAnswerCreateManyUserInputEnvelope";
import { PollAnswerCreateOrConnectWithoutUserInput } from "../inputs/PollAnswerCreateOrConnectWithoutUserInput";
import { PollAnswerCreateWithoutUserInput } from "../inputs/PollAnswerCreateWithoutUserInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class PollAnswerCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PollAnswerCreateWithoutUserInput], {
    nullable: true,
  })
  create?: PollAnswerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: PollAnswerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PollAnswerCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: PollAnswerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PollAnswerWhereUniqueInput], {
    nullable: true,
  })
  connect?: PollAnswerWhereUniqueInput[] | undefined;
}
