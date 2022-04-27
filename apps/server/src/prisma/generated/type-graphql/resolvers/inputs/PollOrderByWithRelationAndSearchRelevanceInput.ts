import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerOrderByRelationAggregateInput } from "../inputs/PollAnswerOrderByRelationAggregateInput";
import { PollOptionOrderByRelationAggregateInput } from "../inputs/PollOptionOrderByRelationAggregateInput";
import { PollOrderByRelevanceInput } from "../inputs/PollOrderByRelevanceInput";
import { PostOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PostOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class PollOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  question?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOptionOrderByRelationAggregateInput, {
    nullable: true,
  })
  pollOptions?: PollOptionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerOrderByRelationAggregateInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PollOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: PollOrderByRelevanceInput | undefined;
}
