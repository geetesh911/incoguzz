import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoOrderByRelevanceFieldEnum } from "../../enums/PhotoOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PhotoOrderByRelevanceInput", {
  isAbstract: true,
})
export class PhotoOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PhotoOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "url" | "postId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
