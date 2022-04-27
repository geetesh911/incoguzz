import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsOrderByRelevanceFieldEnum } from "../../enums/SettingsOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingsOrderByRelevanceInput", {
  isAbstract: true,
})
export class SettingsOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [SettingsOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "userId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
