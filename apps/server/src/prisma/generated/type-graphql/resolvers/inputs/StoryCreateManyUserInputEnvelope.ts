import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateManyUserInput } from "../inputs/StoryCreateManyUserInput";

@TypeGraphQL.InputType("StoryCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class StoryCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [StoryCreateManyUserInput], {
    nullable: false,
  })
  data!: StoryCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
