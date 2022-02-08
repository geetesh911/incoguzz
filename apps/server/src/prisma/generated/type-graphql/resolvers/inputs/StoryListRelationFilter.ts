import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryWhereInput } from "../inputs/StoryWhereInput";

@TypeGraphQL.InputType("StoryListRelationFilter", {
  isAbstract: true,
})
export class StoryListRelationFilter {
  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  every?: StoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  some?: StoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  none?: StoryWhereInput | undefined;
}
