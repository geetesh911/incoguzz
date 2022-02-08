import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryScalarWhereInput } from "../inputs/StoryScalarWhereInput";
import { StoryUpdateManyMutationInput } from "../inputs/StoryUpdateManyMutationInput";

@TypeGraphQL.InputType("StoryUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class StoryUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => StoryScalarWhereInput, {
    nullable: false,
  })
  where!: StoryScalarWhereInput;

  @TypeGraphQL.Field(_type => StoryUpdateManyMutationInput, {
    nullable: false,
  })
  data!: StoryUpdateManyMutationInput;
}
