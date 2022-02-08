import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BlockedScalarWhereInput", {
  isAbstract: true,
})
export class BlockedScalarWhereInput {
  @TypeGraphQL.Field(_type => [BlockedScalarWhereInput], {
    nullable: true,
  })
  AND?: BlockedScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedScalarWhereInput], {
    nullable: true,
  })
  OR?: BlockedScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedScalarWhereInput], {
    nullable: true,
  })
  NOT?: BlockedScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  sourceUserId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  targetUserId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
