import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCountAggregate } from "../outputs/FollowRequestCountAggregate";
import { FollowRequestMaxAggregate } from "../outputs/FollowRequestMaxAggregate";
import { FollowRequestMinAggregate } from "../outputs/FollowRequestMinAggregate";

@TypeGraphQL.ObjectType("AggregateFollowRequest", {
  isAbstract: true,
})
export class AggregateFollowRequest {
  @TypeGraphQL.Field(_type => FollowRequestCountAggregate, {
    nullable: true,
  })
  _count!: FollowRequestCountAggregate | null;

  @TypeGraphQL.Field(_type => FollowRequestMinAggregate, {
    nullable: true,
  })
  _min!: FollowRequestMinAggregate | null;

  @TypeGraphQL.Field(_type => FollowRequestMaxAggregate, {
    nullable: true,
  })
  _max!: FollowRequestMaxAggregate | null;
}
