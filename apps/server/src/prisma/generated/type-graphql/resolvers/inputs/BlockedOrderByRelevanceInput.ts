import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedOrderByRelevanceFieldEnum } from "../../enums/BlockedOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BlockedOrderByRelevanceInput", {
  isAbstract: true,
})
export class BlockedOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [BlockedOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "sourceUserId" | "targetUserId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
