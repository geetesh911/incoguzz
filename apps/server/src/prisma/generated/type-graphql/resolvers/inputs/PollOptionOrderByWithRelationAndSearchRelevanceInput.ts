import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerOrderByRelationAggregateInput } from "../inputs/PollAnswerOrderByRelationAggregateInput";
import { PollOptionOrderByRelevanceInput } from "../inputs/PollOptionOrderByRelevanceInput";
import { PollOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PollOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollOptionOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class PollOptionOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  option?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  poll?: PollOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  pollId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollAnswerOrderByRelationAggregateInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollOptionOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: PollOptionOrderByRelevanceInput | undefined;
}
