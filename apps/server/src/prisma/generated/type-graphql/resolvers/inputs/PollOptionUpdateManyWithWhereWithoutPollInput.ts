import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionScalarWhereInput } from "../inputs/PollOptionScalarWhereInput";
import { PollOptionUpdateManyMutationInput } from "../inputs/PollOptionUpdateManyMutationInput";

@TypeGraphQL.InputType("PollOptionUpdateManyWithWhereWithoutPollInput", {
  isAbstract: true,
})
export class PollOptionUpdateManyWithWhereWithoutPollInput {
  @TypeGraphQL.Field(_type => PollOptionScalarWhereInput, {
    nullable: false,
  })
  where!: PollOptionScalarWhereInput;

  @TypeGraphQL.Field(_type => PollOptionUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PollOptionUpdateManyMutationInput;
}
