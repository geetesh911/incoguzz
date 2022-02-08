import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateWithoutMessageInput } from "../inputs/StoryCreateWithoutMessageInput";
import { StoryUpdateWithoutMessageInput } from "../inputs/StoryUpdateWithoutMessageInput";

@TypeGraphQL.InputType("StoryUpsertWithoutMessageInput", {
  isAbstract: true,
})
export class StoryUpsertWithoutMessageInput {
  @TypeGraphQL.Field(_type => StoryUpdateWithoutMessageInput, {
    nullable: false,
  })
  update!: StoryUpdateWithoutMessageInput;

  @TypeGraphQL.Field(_type => StoryCreateWithoutMessageInput, {
    nullable: false,
  })
  create!: StoryCreateWithoutMessageInput;
}
