import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gender } from "../../enums/Gender";

@TypeGraphQL.InputType("NestedEnumGenderNullableFilter", {
  isAbstract: true,
})
export class NestedEnumGenderNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumGenderNullableFilter, {
    nullable: true,
  })
  not?: NestedEnumGenderNullableFilter | undefined;
}
