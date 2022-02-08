import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCreateManyPollInput } from "../inputs/PollOptionCreateManyPollInput";

@TypeGraphQL.InputType("PollOptionCreateManyPollInputEnvelope", {
  isAbstract: true,
})
export class PollOptionCreateManyPollInputEnvelope {
  @TypeGraphQL.Field(_type => [PollOptionCreateManyPollInput], {
    nullable: false,
  })
  data!: PollOptionCreateManyPollInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
