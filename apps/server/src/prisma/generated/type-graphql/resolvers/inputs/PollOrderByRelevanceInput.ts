import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOrderByRelevanceFieldEnum } from "../../enums/PollOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollOrderByRelevanceInput", {
  isAbstract: true,
})
export class PollOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PollOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "question" | "postId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
