import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCountOrderByAggregateInput } from "../inputs/PhotoCountOrderByAggregateInput";
import { PhotoMaxOrderByAggregateInput } from "../inputs/PhotoMaxOrderByAggregateInput";
import { PhotoMinOrderByAggregateInput } from "../inputs/PhotoMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PhotoOrderByWithAggregationInput", {
  isAbstract: true,
})
export class PhotoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PhotoCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PhotoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PhotoMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PhotoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PhotoMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PhotoMinOrderByAggregateInput | undefined;
}
