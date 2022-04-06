import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCreateManyUserInput } from "../inputs/ReactionCreateManyUserInput";

@TypeGraphQL.InputType("ReactionCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class ReactionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionCreateManyUserInput], {
    nullable: false,
  })
  data!: ReactionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
