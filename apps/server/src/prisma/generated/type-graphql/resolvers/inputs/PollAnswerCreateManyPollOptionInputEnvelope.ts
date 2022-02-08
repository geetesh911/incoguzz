import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyPollOptionInput } from "../inputs/PollAnswerCreateManyPollOptionInput";

@TypeGraphQL.InputType("PollAnswerCreateManyPollOptionInputEnvelope", {
  isAbstract: true,
})
export class PollAnswerCreateManyPollOptionInputEnvelope {
  @TypeGraphQL.Field(_type => [PollAnswerCreateManyPollOptionInput], {
    nullable: false,
  })
  data!: PollAnswerCreateManyPollOptionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
