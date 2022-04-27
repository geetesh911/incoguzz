import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CommentOrderByWithRelationAndSearchRelevanceInput";
import { CommentRepliesOrderByRelevanceInput } from "../inputs/CommentRepliesOrderByRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType(
  "CommentRepliesOrderByWithRelationAndSearchRelevanceInput",
  {
    isAbstract: true,
  },
)
export class CommentRepliesOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  comment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(
    _type => CommentOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  repliedTo?: CommentOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  repliedToId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentRepliesOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: CommentRepliesOrderByRelevanceInput | undefined;
}
