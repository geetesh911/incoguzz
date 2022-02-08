import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCountOrderByAggregateInput } from "../inputs/PollCountOrderByAggregateInput";
import { PollMaxOrderByAggregateInput } from "../inputs/PollMaxOrderByAggregateInput";
import { PollMinOrderByAggregateInput } from "../inputs/PollMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollOrderByWithAggregationInput", {
  isAbstract: true,
})
export class PollOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  question?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PollCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PollMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PollMinOrderByAggregateInput | undefined;
}
