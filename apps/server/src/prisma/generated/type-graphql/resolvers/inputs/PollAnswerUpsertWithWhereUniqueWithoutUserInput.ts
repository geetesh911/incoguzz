import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateWithoutUserInput } from "../inputs/PollAnswerCreateWithoutUserInput";
import { PollAnswerUpdateWithoutUserInput } from "../inputs/PollAnswerUpdateWithoutUserInput";
import { PollAnswerWhereUniqueInput } from "../inputs/PollAnswerWhereUniqueInput";

@TypeGraphQL.InputType("PollAnswerUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class PollAnswerUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PollAnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: PollAnswerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollAnswerUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: PollAnswerUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PollAnswerCreateWithoutUserInput, {
    nullable: false,
  })
  create!: PollAnswerCreateWithoutUserInput;
}
