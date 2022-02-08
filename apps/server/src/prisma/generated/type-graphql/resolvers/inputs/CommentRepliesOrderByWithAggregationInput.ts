import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCountOrderByAggregateInput } from "../inputs/CommentRepliesCountOrderByAggregateInput";
import { CommentRepliesMaxOrderByAggregateInput } from "../inputs/CommentRepliesMaxOrderByAggregateInput";
import { CommentRepliesMinOrderByAggregateInput } from "../inputs/CommentRepliesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentRepliesOrderByWithAggregationInput", {
  isAbstract: true,
})
export class CommentRepliesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  comment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  repliedToId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: CommentRepliesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: CommentRepliesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: CommentRepliesMinOrderByAggregateInput | undefined;
}
