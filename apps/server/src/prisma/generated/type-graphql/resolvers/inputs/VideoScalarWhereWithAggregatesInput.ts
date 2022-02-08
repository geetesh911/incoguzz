import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VideoScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class VideoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: VideoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: VideoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: VideoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  thumbnailUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;
}
