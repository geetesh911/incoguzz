import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PollScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class PollScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PollScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: PollScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: PollScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: PollScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  question?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  postId?: StringWithAggregatesFilter | undefined;
}
