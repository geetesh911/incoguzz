import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PollAnswerMaxAggregate", {
  isAbstract: true,
})
export class PollAnswerMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  pollId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  pollOptionId!: string | null;
}
