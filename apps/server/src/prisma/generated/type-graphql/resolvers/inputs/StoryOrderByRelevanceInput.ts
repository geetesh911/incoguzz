import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { StoryOrderByRelevanceFieldEnum } from "../../enums/StoryOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("StoryOrderByRelevanceInput", {
  isAbstract: true,
})
export class StoryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [StoryOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "mediaUrl" | "link" | "userId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
