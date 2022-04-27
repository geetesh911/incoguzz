import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { TagOrderByRelevanceInput } from "../inputs/TagOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class TagOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true,
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: TagOrderByRelevanceInput | undefined;
}
