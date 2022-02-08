import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionUpdateWithoutPollInput } from "../inputs/PollOptionUpdateWithoutPollInput";
import { PollOptionWhereUniqueInput } from "../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.InputType("PollOptionUpdateWithWhereUniqueWithoutPollInput", {
  isAbstract: true,
})
export class PollOptionUpdateWithWhereUniqueWithoutPollInput {
  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: false,
  })
  where!: PollOptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollOptionUpdateWithoutPollInput, {
    nullable: false,
  })
  data!: PollOptionUpdateWithoutPollInput;
}
