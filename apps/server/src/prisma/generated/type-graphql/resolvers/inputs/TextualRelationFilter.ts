import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TextualWhereInput } from "../inputs/TextualWhereInput";

@TypeGraphQL.InputType("TextualRelationFilter", {
  isAbstract: true,
})
export class TextualRelationFilter {
  @TypeGraphQL.Field(_type => TextualWhereInput, {
    nullable: true,
  })
  is?: TextualWhereInput | undefined;

  @TypeGraphQL.Field(_type => TextualWhereInput, {
    nullable: true,
  })
  isNot?: TextualWhereInput | undefined;
}
