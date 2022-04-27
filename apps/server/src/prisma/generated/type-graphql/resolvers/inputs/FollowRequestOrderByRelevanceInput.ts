import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestOrderByRelevanceFieldEnum } from "../../enums/FollowRequestOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FollowRequestOrderByRelevanceInput", {
  isAbstract: true,
})
export class FollowRequestOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [FollowRequestOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "message" | "sourceUserId" | "targetUserId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
