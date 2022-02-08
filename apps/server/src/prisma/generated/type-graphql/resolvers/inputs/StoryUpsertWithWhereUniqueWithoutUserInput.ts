import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateWithoutUserInput } from "../inputs/StoryCreateWithoutUserInput";
import { StoryUpdateWithoutUserInput } from "../inputs/StoryUpdateWithoutUserInput";
import { StoryWhereUniqueInput } from "../inputs/StoryWhereUniqueInput";

@TypeGraphQL.InputType("StoryUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class StoryUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: false,
  })
  where!: StoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoryUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: StoryUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => StoryCreateWithoutUserInput, {
    nullable: false,
  })
  create!: StoryCreateWithoutUserInput;
}
