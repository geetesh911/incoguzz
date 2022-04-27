import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingsOrderByRelevanceInput } from "../inputs/SettingsOrderByRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingsOrderByWithRelationAndSearchRelevanceInput", {
  isAbstract: true,
})
export class SettingsOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => SettingsOrderByRelevanceInput, {
    nullable: true,
  })
  _relevance?: SettingsOrderByRelevanceInput | undefined;
}
