import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateWithoutUserInput } from "../inputs/StoryCreateWithoutUserInput";
import { StoryWhereUniqueInput } from "../inputs/StoryWhereUniqueInput";

@TypeGraphQL.InputType("StoryCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class StoryCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: false,
  })
  where!: StoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoryCreateWithoutUserInput, {
    nullable: false,
  })
  create!: StoryCreateWithoutUserInput;
}
