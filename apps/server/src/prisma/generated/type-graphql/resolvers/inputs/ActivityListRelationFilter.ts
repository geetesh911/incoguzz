import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityWhereInput } from "../inputs/ActivityWhereInput";

@TypeGraphQL.InputType("ActivityListRelationFilter", {
  isAbstract: true,
})
export class ActivityListRelationFilter {
  @TypeGraphQL.Field(_type => ActivityWhereInput, {
    nullable: true,
  })
  every?: ActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActivityWhereInput, {
    nullable: true,
  })
  some?: ActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActivityWhereInput, {
    nullable: true,
  })
  none?: ActivityWhereInput | undefined;
}
