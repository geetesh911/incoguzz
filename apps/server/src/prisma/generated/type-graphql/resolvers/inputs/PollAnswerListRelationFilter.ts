import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerWhereInput } from "../inputs/PollAnswerWhereInput";

@TypeGraphQL.InputType("PollAnswerListRelationFilter", {
  isAbstract: true,
})
export class PollAnswerListRelationFilter {
  @TypeGraphQL.Field(_type => PollAnswerWhereInput, {
    nullable: true,
  })
  every?: PollAnswerWhereInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerWhereInput, {
    nullable: true,
  })
  some?: PollAnswerWhereInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerWhereInput, {
    nullable: true,
  })
  none?: PollAnswerWhereInput | undefined;
}
