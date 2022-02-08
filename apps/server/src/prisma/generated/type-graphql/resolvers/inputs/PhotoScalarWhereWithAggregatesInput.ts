import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PhotoScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class PhotoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PhotoScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: PhotoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: PhotoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: PhotoScalarWhereWithAggregatesInput[] | undefined;

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
}
