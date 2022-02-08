import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PollOptionScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class PollOptionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PollOptionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: PollOptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: PollOptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PollOptionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: PollOptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  option?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  pollId?: StringWithAggregatesFilter | undefined;
}
