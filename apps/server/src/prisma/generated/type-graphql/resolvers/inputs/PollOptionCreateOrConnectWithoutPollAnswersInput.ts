import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateWithoutPollAnswersInput } from "../inputs/PollOptionCreateWithoutPollAnswersInput";
import { PollOptionWhereUniqueInput } from "../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.InputType("PollOptionCreateOrConnectWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollOptionCreateOrConnectWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: false,
  })
  where!: PollOptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollOptionCreateWithoutPollAnswersInput, {
    nullable: false,
  })
  create!: PollOptionCreateWithoutPollAnswersInput;
}
