import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerOrderByRelevanceInput } from "../inputs/PollAnswerOrderByRelevanceInput";
import { PollOptionOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PollOptionOrderByWithRelationAndSearchRelevanceInput";
import { PollOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PollOrderByWithRelationAndSearchRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollAnswerOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class PollAnswerOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  poll?: PollOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  pollId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(
    _type => PollOptionOrderByWithRelationAndSearchRelevanceInput,
    {
      nullable: true,
    },
  )
  pollOption?: PollOptionOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  pollOptionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollAnswerOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: PollAnswerOrderByRelevanceInput | undefined;
}
