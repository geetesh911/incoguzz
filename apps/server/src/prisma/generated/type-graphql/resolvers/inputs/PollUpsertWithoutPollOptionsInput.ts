import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutPollOptionsInput } from "../inputs/PollCreateWithoutPollOptionsInput";
import { PollUpdateWithoutPollOptionsInput } from "../inputs/PollUpdateWithoutPollOptionsInput";

@TypeGraphQL.InputType("PollUpsertWithoutPollOptionsInput", {
  isAbstract: true,
})
export class PollUpsertWithoutPollOptionsInput {
  @TypeGraphQL.Field(_type => PollUpdateWithoutPollOptionsInput, {
    nullable: false,
  })
  update!: PollUpdateWithoutPollOptionsInput;

  @TypeGraphQL.Field(_type => PollCreateWithoutPollOptionsInput, {
    nullable: false,
  })
  create!: PollCreateWithoutPollOptionsInput;
}
