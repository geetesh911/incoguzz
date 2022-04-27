import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { TagOrderByRelevanceFieldEnum } from "../../enums/TagOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("TagOrderByRelevanceInput", {
  isAbstract: true,
})
export class TagOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [TagOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
