import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCountAggregate } from "../outputs/FollowRequestCountAggregate";
import { FollowRequestMaxAggregate } from "../outputs/FollowRequestMaxAggregate";
import { FollowRequestMinAggregate } from "../outputs/FollowRequestMinAggregate";

@TypeGraphQL.ObjectType("FollowRequestGroupBy", {
  isAbstract: true,
})
export class FollowRequestGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  message!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  sourceUserId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  targetUserId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

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
