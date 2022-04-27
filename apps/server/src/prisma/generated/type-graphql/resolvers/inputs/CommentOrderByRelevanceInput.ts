import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentOrderByRelevanceFieldEnum } from "../../enums/CommentOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentOrderByRelevanceInput", {
  isAbstract: true,
})
export class CommentOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CommentOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "comment" | "postId" | "userId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
