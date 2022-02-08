import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateWithoutPollInput } from "../inputs/PollAnswerCreateWithoutPollInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerCreateOrConnectWithoutPollInput", {
  isAbstract: true,
})
export class PollAnswerCreateOrConnectWithoutPollInput {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollAnswerCreateWithoutPollInput, {
    nullable: false,
  })
  create!: PollAnswerCreateWithoutPollInput;
}
