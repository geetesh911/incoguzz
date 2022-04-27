import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityOrderByRelevanceFieldEnum } from "../../enums/ActivityOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActivityOrderByRelevanceInput", {
  isAbstract: true,
})
export class ActivityOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ActivityOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "userId" | "postId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
