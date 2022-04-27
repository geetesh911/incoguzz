import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerOrderByRelevanceFieldEnum } from "../../enums/FollowerOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FollowerOrderByRelevanceInput", {
  isAbstract: true,
})
export class FollowerOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [FollowerOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "userId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
