import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PostOrderByWithRelationAndSearchRelevanceInput";
import { TextualOrderByRelevanceInput } from "../inputs/TextualOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TextualOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class TextualOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TextualOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: TextualOrderByRelevanceInput | undefined;
}
