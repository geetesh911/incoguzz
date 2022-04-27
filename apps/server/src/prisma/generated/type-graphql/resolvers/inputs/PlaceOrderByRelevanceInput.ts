import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceOrderByRelevanceFieldEnum } from "../../enums/PlaceOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlaceOrderByRelevanceInput", {
  isAbstract: true,
})
export class PlaceOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [PlaceOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<"id" | "name" | "address">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
