import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionCountAggregate } from "../outputs/PollOptionCountAggregate";
import { PollOptionMaxAggregate } from "../outputs/PollOptionMaxAggregate";
import { PollOptionMinAggregate } from "../outputs/PollOptionMinAggregate";

@TypeGraphQL.ObjectType("AggregatePollOption", {
  isAbstract: true,
})
export class AggregatePollOption {
  @TypeGraphQL.Field(_type => PollOptionCountAggregate, {
    nullable: true,
  })
  _count!: PollOptionCountAggregate | null;

  @TypeGraphQL.Field(_type => PollOptionMinAggregate, {
    nullable: true,
  })
  _min!: PollOptionMinAggregate | null;

  @TypeGraphQL.Field(_type => PollOptionMaxAggregate, {
    nullable: true,
  })
  _max!: PollOptionMaxAggregate | null;
}
