import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionWhereInput } from "../inputs/PollOptionWhereInput";

@TypeGraphQL.InputType("PollOptionListRelationFilter", {
  isAbstract: true,
})
export class PollOptionListRelationFilter {
  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  every?: PollOptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  some?: PollOptionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PollOptionWhereInput, {
    nullable: true,
  })
  none?: PollOptionWhereInput | undefined;
}
