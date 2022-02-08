import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCountAggregate } from "../outputs/ActivityCountAggregate";
import { ActivityMaxAggregate } from "../outputs/ActivityMaxAggregate";
import { ActivityMinAggregate } from "../outputs/ActivityMinAggregate";
import { ActivityType } from "../../enums/ActivityType";

@TypeGraphQL.ObjectType("ActivityGroupBy", {
  isAbstract: true,
})
export class ActivityGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => ActivityType, {
    nullable: false,
  })
  type!: "LIKED" | "COMMENTED" | "POSTED" | "SHARED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

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
