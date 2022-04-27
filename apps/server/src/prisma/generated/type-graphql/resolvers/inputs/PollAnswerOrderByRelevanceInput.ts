import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerOrderByRelevanceFieldEnum } from "../../enums/PollAnswerOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollAnswerOrderByRelevanceInput", {
  isAbstract: true,
})
export class PollAnswerOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PollAnswerOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "userId" | "pollId" | "pollOptionId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
