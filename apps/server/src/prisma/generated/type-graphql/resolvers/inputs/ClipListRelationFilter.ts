import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipWhereInput } from "../inputs/ClipWhereInput";

@TypeGraphQL.InputType("ClipListRelationFilter", {
  isAbstract: true,
})
export class ClipListRelationFilter {
  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  every?: ClipWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  some?: ClipWhereInput | undefined;

  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  none?: ClipWhereInput | undefined;
}
