import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AudioScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class AudioScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AudioScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: AudioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AudioScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: AudioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AudioScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: AudioScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  thumbnailUrl?: StringNullableWithAggregatesFilter | undefined;
}
