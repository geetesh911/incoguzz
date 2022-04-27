import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOrderByRelevanceFieldEnum } from "../../enums/ReactionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReactionOrderByRelevanceInput", {
  isAbstract: true,
})
export class ReactionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ReactionOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "postId" | "userId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
