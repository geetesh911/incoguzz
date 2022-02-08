import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateWithoutPollOptionInput } from "../inputs/PollAnswerCreateWithoutPollOptionInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerCreateOrConnectWithoutPollOptionInput", {
  isAbstract: true,
})
export class PollAnswerCreateOrConnectWithoutPollOptionInput {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollAnswerCreateWithoutPollOptionInput, {
    nullable: false,
  })
  create!: PollAnswerCreateWithoutPollOptionInput;
}
