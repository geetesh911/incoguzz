import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { TextualOrderByRelevanceFieldEnum } from "../../enums/TextualOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("TextualOrderByRelevanceInput", {
  isAbstract: true,
})
export class TextualOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [TextualOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "text" | "postId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
