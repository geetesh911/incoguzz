import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TextualCountOrderByAggregateInput } from "../inputs/TextualCountOrderByAggregateInput";
import { TextualMaxOrderByAggregateInput } from "../inputs/TextualMaxOrderByAggregateInput";
import { TextualMinOrderByAggregateInput } from "../inputs/TextualMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TextualOrderByWithAggregationInput", {
  isAbstract: true,
})
export class TextualOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TextualCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: TextualCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TextualMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: TextualMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TextualMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: TextualMinOrderByAggregateInput | undefined;
}
