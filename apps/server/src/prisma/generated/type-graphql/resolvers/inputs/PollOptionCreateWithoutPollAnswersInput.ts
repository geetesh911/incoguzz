import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateNestedOneWithoutPollOptionsInput } from "../inputs/PollCreateNestedOneWithoutPollOptionsInput";

@TypeGraphQL.InputType("PollOptionCreateWithoutPollAnswersInput", {
  isAbstract: true,
})
export class PollOptionCreateWithoutPollAnswersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  option!: string;

  @TypeGraphQL.Field(_type => PollCreateNestedOneWithoutPollOptionsInput, {
    nullable: false,
  })
  poll!: PollCreateNestedOneWithoutPollOptionsInput;
}
