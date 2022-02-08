import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { EnumGenderNullableWithAggregatesFilter } from "../inputs/EnumGenderNullableWithAggregatesFilter";
import { EnumInterestedInTypesNullableWithAggregatesFilter } from "../inputs/EnumInterestedInTypesNullableWithAggregatesFilter";
import { EnumRelationshipStatusNullableWithAggregatesFilter } from "../inputs/EnumRelationshipStatusNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProfileScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class ProfileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  nickname?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  bio?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  mobileNo?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  country?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGenderNullableWithAggregatesFilter, {
    nullable: true,
  })
  gender?: EnumGenderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  dob?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(
    _type => EnumInterestedInTypesNullableWithAggregatesFilter,
    {
      nullable: true,
    },
  )
  interestedIn?: EnumInterestedInTypesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(
    _type => EnumRelationshipStatusNullableWithAggregatesFilter,
    {
      nullable: true,
    },
  )
  relationshipStatus?:
    | EnumRelationshipStatusNullableWithAggregatesFilter
    | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  website?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  dpUrl?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringNullableWithAggregatesFilter | undefined;
}
