import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookmarkOrderByRelevanceFieldEnum } from "../../enums/BookmarkOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookmarkOrderByRelevanceInput", {
  isAbstract: true,
})
export class BookmarkOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [BookmarkOrderByRelevanceFieldEnum], {
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
