import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateWithoutPollInput } from "../inputs/PollOptionCreateWithoutPollInput";
import { PollOptionWhereUniqueInput } from "../inputs/PollOptionWhereUniqueInput";

@TypeGraphQL.InputType("PollOptionCreateOrConnectWithoutPollInput", {
  isAbstract: true,
})
export class PollOptionCreateOrConnectWithoutPollInput {
  @TypeGraphQL.Field(_type => PollOptionWhereUniqueInput, {
    nullable: false,
  })
  where!: PollOptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollOptionCreateWithoutPollInput, {
    nullable: false,
  })
  create!: PollOptionCreateWithoutPollInput;
}
