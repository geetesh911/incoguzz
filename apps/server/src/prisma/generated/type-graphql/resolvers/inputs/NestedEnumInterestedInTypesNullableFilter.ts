import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InterestedInTypes } from "../../enums/InterestedInTypes";

@TypeGraphQL.InputType("NestedEnumInterestedInTypesNullableFilter", {
  isAbstract: true,
})
export class NestedEnumInterestedInTypesNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumInterestedInTypesNullableFilter, {
    nullable: true,
  })
  not?: NestedEnumInterestedInTypesNullableFilter | undefined;
}
