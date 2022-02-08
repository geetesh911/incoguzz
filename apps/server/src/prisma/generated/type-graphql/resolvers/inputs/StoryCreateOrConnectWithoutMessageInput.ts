import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateWithoutMessageInput } from "../inputs/StoryCreateWithoutMessageInput";
import { StoryWhereUniqueInput } from "../inputs/StoryWhereUniqueInput";

@TypeGraphQL.InputType("StoryCreateOrConnectWithoutMessageInput", {
  isAbstract: true,
})
export class StoryCreateOrConnectWithoutMessageInput {
  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: false,
  })
  where!: StoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoryCreateWithoutMessageInput, {
    nullable: false,
  })
  create!: StoryCreateWithoutMessageInput;
}
