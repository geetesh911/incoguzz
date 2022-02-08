import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceWhereInput } from "../inputs/PlaceWhereInput";

@TypeGraphQL.InputType("PlaceRelationFilter", {
  isAbstract: true,
})
export class PlaceRelationFilter {
  @TypeGraphQL.Field(_type => PlaceWhereInput, {
    nullable: true,
  })
  is?: PlaceWhereInput | undefined;

  @TypeGraphQL.Field(_type => PlaceWhereInput, {
    nullable: true,
  })
  isNot?: PlaceWhereInput | undefined;
}
