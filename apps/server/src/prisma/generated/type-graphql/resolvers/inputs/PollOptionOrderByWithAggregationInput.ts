import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCountOrderByAggregateInput } from "../inputs/PollOptionCountOrderByAggregateInput";
import { PollOptionMaxOrderByAggregateInput } from "../inputs/PollOptionMaxOrderByAggregateInput";
import { PollOptionMinOrderByAggregateInput } from "../inputs/PollOptionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollOptionOrderByWithAggregationInput", {
  isAbstract: true,
})
export class PollOptionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  option?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  pollId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOptionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PollOptionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollOptionMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PollOptionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollOptionMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PollOptionMinOrderByAggregateInput | undefined;
}
