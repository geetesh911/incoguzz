import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCountOrderByAggregateInput } from "../inputs/PollAnswerCountOrderByAggregateInput";
import { PollAnswerMaxOrderByAggregateInput } from "../inputs/PollAnswerMaxOrderByAggregateInput";
import { PollAnswerMinOrderByAggregateInput } from "../inputs/PollAnswerMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollAnswerOrderByWithAggregationInput", {
  isAbstract: true,
})
export class PollAnswerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  pollId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  pollOptionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollAnswerCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PollAnswerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PollAnswerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PollAnswerMinOrderByAggregateInput | undefined;
}
