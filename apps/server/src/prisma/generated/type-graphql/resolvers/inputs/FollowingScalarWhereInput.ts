import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FollowingScalarWhereInput", {
  isAbstract: true,
})
export class FollowingScalarWhereInput {
  @TypeGraphQL.Field(_type => [FollowingScalarWhereInput], {
    nullable: true,
  })
  AND?: FollowingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereInput], {
    nullable: true,
  })
  OR?: FollowingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarWhereInput], {
    nullable: true,
  })
  NOT?: FollowingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
