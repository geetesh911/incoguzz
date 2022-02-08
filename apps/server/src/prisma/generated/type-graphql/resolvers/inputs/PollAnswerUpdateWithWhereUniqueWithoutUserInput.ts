import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerUpdateWithoutUserInput } from "../inputs/PollAnswerUpdateWithoutUserInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class PollAnswerUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollAnswerUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: PollAnswerUpdateWithoutUserInput;
}
