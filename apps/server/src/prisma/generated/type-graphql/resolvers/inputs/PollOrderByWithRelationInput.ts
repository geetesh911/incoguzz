import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerOrderByRelationAggregateInput } from "../inputs/PollAnswerOrderByRelationAggregateInput";
import { PollOptionOrderByRelationAggregateInput } from "../inputs/PollOptionOrderByRelationAggregateInput";
import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollOrderByWithRelationInput", {
  isAbstract: true,
})
export class PollOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  question?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostOrderByWithRelationInput, {
    nullable: true,
  })
  post?: PostOrderByWithRelationInput | undefined;

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
}
