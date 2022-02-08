import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowingCountAggregate } from "../outputs/FollowingCountAggregate";
import { FollowingMaxAggregate } from "../outputs/FollowingMaxAggregate";
import { FollowingMinAggregate } from "../outputs/FollowingMinAggregate";

@TypeGraphQL.ObjectType("FollowingGroupBy", {
  isAbstract: true,
})
export class FollowingGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => FollowingCountAggregate, {
    nullable: true,
  })
  _count!: FollowingCountAggregate | null;

  @TypeGraphQL.Field(_type => FollowingMinAggregate, {
    nullable: true,
  })
  _min!: FollowingMinAggregate | null;

  @TypeGraphQL.Field(_type => FollowingMaxAggregate, {
    nullable: true,
  })
  _max!: FollowingMaxAggregate | null;
}
