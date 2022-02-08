import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCountAggregate } from "../outputs/BlockedCountAggregate";
import { BlockedMaxAggregate } from "../outputs/BlockedMaxAggregate";
import { BlockedMinAggregate } from "../outputs/BlockedMinAggregate";

@TypeGraphQL.ObjectType("AggregateBlocked", {
  isAbstract: true,
})
export class AggregateBlocked {
  @TypeGraphQL.Field(_type => BlockedCountAggregate, {
    nullable: true,
  })
  _count!: BlockedCountAggregate | null;

  @TypeGraphQL.Field(_type => BlockedMinAggregate, {
    nullable: true,
  })
  _min!: BlockedMinAggregate | null;

  @TypeGraphQL.Field(_type => BlockedMaxAggregate, {
    nullable: true,
  })
  _max!: BlockedMaxAggregate | null;
}
