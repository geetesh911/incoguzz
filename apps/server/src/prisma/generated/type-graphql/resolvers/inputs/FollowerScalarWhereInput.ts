import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FollowerScalarWhereInput", {
  isAbstract: true,
})
export class FollowerScalarWhereInput {
  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true,
  })
  AND?: FollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true,
  })
  OR?: FollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true,
  })
  NOT?: FollowerScalarWhereInput[] | undefined;

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
