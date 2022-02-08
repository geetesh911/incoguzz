import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryUpdateWithoutUserInput } from "../inputs/StoryUpdateWithoutUserInput";
import { StoryWhereUniqueInput } from "../inputs/StoryWhereUniqueInput";

@TypeGraphQL.InputType("StoryUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class StoryUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: false,
  })
  where!: StoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoryUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: StoryUpdateWithoutUserInput;
}
