import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCountAggregate } from "../outputs/ActivityCountAggregate";
import { ActivityMaxAggregate } from "../outputs/ActivityMaxAggregate";
import { ActivityMinAggregate } from "../outputs/ActivityMinAggregate";

@TypeGraphQL.ObjectType("AggregateActivity", {
  isAbstract: true,
})
export class AggregateActivity {
  @TypeGraphQL.Field(_type => ActivityCountAggregate, {
    nullable: true,
  })
  _count!: ActivityCountAggregate | null;

  @TypeGraphQL.Field(_type => ActivityMinAggregate, {
    nullable: true,
  })
  _min!: ActivityMinAggregate | null;

  @TypeGraphQL.Field(_type => ActivityMaxAggregate, {
    nullable: true,
  })
  _max!: ActivityMaxAggregate | null;
}
