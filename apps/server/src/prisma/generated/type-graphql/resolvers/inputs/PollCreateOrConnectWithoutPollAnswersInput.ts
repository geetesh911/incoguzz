import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutPollAnswersInput } from "../inputs/PollCreateWithoutPollAnswersInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollCreateOrConnectWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollCreateOrConnectWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false,
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollCreateWithoutPollAnswersInput, {
    nullable: false,
  })
  create!: PollCreateWithoutPollAnswersInput;
}
