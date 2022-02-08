import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PollOptionMaxAggregate", {
  isAbstract: true,
})
export class PollOptionMaxAggregate {
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
