import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { VideoOrderByRelevanceFieldEnum } from "../../enums/VideoOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("VideoOrderByRelevanceInput", {
  isAbstract: true,
})
export class VideoOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [VideoOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "thumbnailUrl" | "url" | "postId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
