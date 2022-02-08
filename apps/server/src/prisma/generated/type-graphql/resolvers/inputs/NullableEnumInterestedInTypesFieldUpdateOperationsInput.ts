import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InterestedInTypes } from "../../enums/InterestedInTypes";

@TypeGraphQL.InputType(
  "NullableEnumInterestedInTypesFieldUpdateOperationsInput",
  {
    isAbstract: true,
  },
)
export class NullableEnumInterestedInTypesFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => InterestedInTypes, {
    nullable: true,
  })
  set?: "MEN" | "FEMALE" | undefined;
}
