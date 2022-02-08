import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FollowerScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class FollowerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FollowerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: FollowerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: FollowerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: FollowerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
