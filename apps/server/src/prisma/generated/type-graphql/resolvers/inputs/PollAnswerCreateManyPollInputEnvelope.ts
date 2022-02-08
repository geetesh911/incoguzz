import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyPollInput } from "../inputs/PollAnswerCreateManyPollInput";

@TypeGraphQL.InputType("PollAnswerCreateManyPollInputEnvelope", {
  isAbstract: true,
})
export class PollAnswerCreateManyPollInputEnvelope {
  @TypeGraphQL.Field(_type => [PollAnswerCreateManyPollInput], {
    nullable: false,
  })
  data!: PollAnswerCreateManyPollInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
