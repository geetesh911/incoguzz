import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipWhereInput } from "../inputs/ClipWhereInput";

@TypeGraphQL.InputType("ClipRelationFilter", {
  isAbstract: true,
})
export class ClipRelationFilter {
  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  is?: ClipWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  isNot?: ClipWhereInput | undefined;
}
