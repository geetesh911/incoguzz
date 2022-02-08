import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutPollOptionsInput } from "../inputs/PollCreateWithoutPollOptionsInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollCreateOrConnectWithoutPollOptionsInput", {
  isAbstract: true,
})
export class PollCreateOrConnectWithoutPollOptionsInput {
  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false,
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollCreateWithoutPollOptionsInput, {
    nullable: false,
  })
  create!: PollCreateWithoutPollOptionsInput;
}
