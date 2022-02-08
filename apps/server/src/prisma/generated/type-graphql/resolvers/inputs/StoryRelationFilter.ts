import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryWhereInput } from "../inputs/StoryWhereInput";

@TypeGraphQL.InputType("StoryRelationFilter", {
  isAbstract: true,
})
export class StoryRelationFilter {
  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  is?: StoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  isNot?: StoryWhereInput | undefined;
}
