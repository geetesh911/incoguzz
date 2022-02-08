import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PollOptionMinAggregate", {
  isAbstract: true,
})
export class PollOptionMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  option!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  pollId!: string | null;
}
