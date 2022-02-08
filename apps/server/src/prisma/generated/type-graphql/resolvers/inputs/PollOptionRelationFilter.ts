import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionWhereInput } from "../inputs/PollOptionWhereInput";

@TypeGraphQL.InputType("PollOptionRelationFilter", {
  isAbstract: true,
})
export class PollOptionRelationFilter {
  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  is?: PollOptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  isNot?: PollOptionWhereInput | undefined;
}
