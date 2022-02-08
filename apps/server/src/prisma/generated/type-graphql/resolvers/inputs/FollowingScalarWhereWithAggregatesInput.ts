import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FollowingScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class FollowingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FollowingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: FollowingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: FollowingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: FollowingScalarWhereWithAggregatesInput[] | undefined;

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
