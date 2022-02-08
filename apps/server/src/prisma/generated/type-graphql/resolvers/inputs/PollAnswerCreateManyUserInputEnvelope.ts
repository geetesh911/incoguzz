import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateManyUserInput } from "../inputs/PollAnswerCreateManyUserInput";

@TypeGraphQL.InputType("PollAnswerCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class PollAnswerCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PollAnswerCreateManyUserInput], {
    nullable: false,
  })
  data!: PollAnswerCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
