import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollWhereInput } from "../inputs/PollWhereInput";

@TypeGraphQL.InputType("PollRelationFilter", {
  isAbstract: true,
})
export class PollRelationFilter {
  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true,
  })
  is?: PollWhereInput | undefined;

  @TypeGraphQL.Field(_type => PollWhereInput, {
    nullable: true,
  })
  isNot?: PollWhereInput | undefined;
}
