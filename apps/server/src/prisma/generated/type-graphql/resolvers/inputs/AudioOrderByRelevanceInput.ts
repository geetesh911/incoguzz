import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioOrderByRelevanceFieldEnum } from "../../enums/AudioOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AudioOrderByRelevanceInput", {
  isAbstract: true,
})
export class AudioOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [AudioOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "url" | "postId" | "thumbnailUrl">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
