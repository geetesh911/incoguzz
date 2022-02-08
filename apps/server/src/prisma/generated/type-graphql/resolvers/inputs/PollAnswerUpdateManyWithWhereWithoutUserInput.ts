import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerScalarWhereInput } from "../inputs/PollAnswerScalarWhereInput";
import { PollAnswerUpdateManyMutationInput } from "../inputs/PollAnswerUpdateManyMutationInput";

@TypeGraphQL.InputType("PollAnswerUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class PollAnswerUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => PollAnswerScalarWhereInput, {
    nullable: false,
  })
  where!: PollAnswerScalarWhereInput;

  @TypeGraphQL.Field(_type => PollAnswerUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PollAnswerUpdateManyMutationInput;
}
