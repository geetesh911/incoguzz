import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateWithoutPollInput } from "../inputs/PollOptionCreateWithoutPollInput";
import { PollOptionUpdateWithoutPollInput } from "../inputs/PollOptionUpdateWithoutPollInput";
import { PollOptionWhereUniqueInput } from "../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.InputType("PollOptionUpsertWithWhereUniqueWithoutPollInput", {
  isAbstract: true,
})
export class PollOptionUpsertWithWhereUniqueWithoutPollInput {
  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: false,
  })
  where!: PollOptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollOptionUpdateWithoutPollInput, {
    nullable: false,
  })
  update!: PollOptionUpdateWithoutPollInput;

  @TypeGraphQL.Field(_type => PollOptionCreateWithoutPollInput, {
    nullable: false,
  })
  create!: PollOptionCreateWithoutPollInput;
}
