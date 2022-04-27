import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesOrderByRelevanceFieldEnum } from "../../enums/CommentRepliesOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentRepliesOrderByRelevanceInput", {
  isAbstract: true,
})
export class CommentRepliesOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CommentRepliesOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "comment" | "repliedToId" | "userId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
