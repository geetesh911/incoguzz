import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoOrderByRelevanceInput } from "../inputs/PhotoOrderByRelevanceInput";
import { PostOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PostOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PhotoOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class PhotoOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PhotoOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: PhotoOrderByRelevanceInput | undefined;
}
