import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateOrConnectWithoutPollAnswersInput } from "../inputs/PollCreateOrConnectWithoutPollAnswersInput";
import { PollCreateWithoutPollAnswersInput } from "../inputs/PollCreateWithoutPollAnswersInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollCreateNestedOneWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollCreateNestedOneWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => PollCreateWithoutPollAnswersInput, {
    nullable: true,
  })
  create?: PollCreateWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => PollCreateOrConnectWithoutPollAnswersInput, {
    nullable: true,
  })
  connectOrCreate?: PollCreateOrConnectWithoutPollAnswersInput | undefined;

  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: true,
  })
  connect?: PollWhereUniqueInput | undefined;
}
