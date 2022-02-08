import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioWhereInput } from "../inputs/AudioWhereInput";

@TypeGraphQL.InputType("AudioRelationFilter", {
  isAbstract: true,
})
export class AudioRelationFilter {
  @TypeGraphQL.Field(_type => AudioWhereInput, {
    nullable: true,
  })
  is?: AudioWhereInput | undefined;

  @TypeGraphQL.Field(_type => AudioWhereInput, {
    nullable: true,
  })
  isNot?: AudioWhereInput | undefined;
}
