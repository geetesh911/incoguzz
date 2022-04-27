import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionOrderByRelevanceFieldEnum } from "../../enums/PollOptionOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollOptionOrderByRelevanceInput", {
  isAbstract: true,
})
export class PollOptionOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PollOptionOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "option" | "pollId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
