import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioOrderByRelevanceFieldEnum } from "../../enums/ClipAudioOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ClipAudioOrderByRelevanceInput", {
  isAbstract: true,
})
export class ClipAudioOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ClipAudioOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "name" | "audioUrl">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
