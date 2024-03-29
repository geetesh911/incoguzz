import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";
import { UserOrderByRelevanceFieldEnum } from "../../enums/UserOrderByRelevanceFieldEnum";

@TypeGraphQL.InputType("UserOrderByRelevanceInput", {
  isAbstract: true,
})
export class UserOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [UserOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "email" | "username" | "password" | "googleUserId">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
