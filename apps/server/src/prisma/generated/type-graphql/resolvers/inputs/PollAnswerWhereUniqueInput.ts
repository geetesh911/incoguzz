import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PollAnswerWhereUniqueInput", {
  isAbstract: true,
})
export class PollAnswerWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  pollId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  pollOptionId?: string | undefined;
}
