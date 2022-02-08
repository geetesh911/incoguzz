import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCountOrderByAggregateInput } from "../inputs/VideoCountOrderByAggregateInput";
import { VideoMaxOrderByAggregateInput } from "../inputs/VideoMaxOrderByAggregateInput";
import { VideoMinOrderByAggregateInput } from "../inputs/VideoMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VideoOrderByWithAggregationInput", {
  isAbstract: true,
})
export class VideoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  thumbnailUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VideoCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: VideoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VideoMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: VideoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VideoMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: VideoMinOrderByAggregateInput | undefined;
}
