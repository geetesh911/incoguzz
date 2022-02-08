import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumInterestedInTypesNullableFilter } from "../inputs/NestedEnumInterestedInTypesNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { InterestedInTypes } from "../../enums/InterestedInTypes";

@TypeGraphQL.InputType(
  "NestedEnumInterestedInTypesNullableWithAggregatesFilter",
  {
    isAbstract: true,
  },
)
export class NestedEnumInterestedInTypesNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => InterestedInTypes, {
    nullable: true,
  })
  equals?: "MEN" | "FEMALE" | undefined;

  @TypeGraphQL.Field(_type => [InterestedInTypes], {
    nullable: true,
  })
  in?: Array<"MEN" | "FEMALE"> | undefined;

  @TypeGraphQL.Field(_type => [InterestedInTypes], {
    nullable: true,
  })
  notIn?: Array<"MEN" | "FEMALE"> | undefined;

  @TypeGraphQL.Field(
    _type => NestedEnumInterestedInTypesNullableWithAggregatesFilter,
    {
      nullable: true,
    },
  )
  not?: NestedEnumInterestedInTypesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true,
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumInterestedInTypesNullableFilter, {
    nullable: true,
  })
  _min?: NestedEnumInterestedInTypesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumInterestedInTypesNullableFilter, {
    nullable: true,
  })
  _max?: NestedEnumInterestedInTypesNullableFilter | undefined;
}
