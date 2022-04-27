import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipOrderByRelevanceFieldEnum } from "../../enums/ClipOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClipOrderByRelevanceInput", {
  isAbstract: true,
})
export class ClipOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ClipOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "url" | "postId" | "thumbnailUrl" | "clipAudioId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
