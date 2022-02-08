import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCountOrderByAggregateInput } from "../inputs/AudioCountOrderByAggregateInput";
import { AudioMaxOrderByAggregateInput } from "../inputs/AudioMaxOrderByAggregateInput";
import { AudioMinOrderByAggregateInput } from "../inputs/AudioMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AudioOrderByWithAggregationInput", {
  isAbstract: true,
})
export class AudioOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => AudioCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: AudioCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AudioMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: AudioMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AudioMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: AudioMinOrderByAggregateInput | undefined;
}
