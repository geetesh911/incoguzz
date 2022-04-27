import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingOrderByRelevanceFieldEnum } from "../../enums/FollowingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FollowingOrderByRelevanceInput", {
  isAbstract: true,
})
export class FollowingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [FollowingOrderByRelevanceFieldEnum], {
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
