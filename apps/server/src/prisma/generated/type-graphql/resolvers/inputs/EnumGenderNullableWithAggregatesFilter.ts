import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGenderNullableFilter } from "../inputs/NestedEnumGenderNullableFilter";
import { NestedEnumGenderNullableWithAggregatesFilter } from "../inputs/NestedEnumGenderNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.InputType("EnumGenderNullableWithAggregatesFilter", {
  isAbstract: true,
})
export class EnumGenderNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Gender, {
    nullable: true,
  })
  equals?: "MALE" | "FEMALE" | undefined;

  @TypeGraphQL.Field(_type => [Gender], {
    nullable: true,
  })
  in?: Array<"MALE" | "FEMALE"> | undefined;

  @TypeGraphQL.Field(_type => [Gender], {
    nullable: true,
  })
  notIn?: Array<"MALE" | "FEMALE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGenderNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumGenderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true,
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter, {
    nullable: true,
  })
  _min?: NestedEnumGenderNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter, {
    nullable: true,
  })
  _max?: NestedEnumGenderNullableFilter | undefined;
}
