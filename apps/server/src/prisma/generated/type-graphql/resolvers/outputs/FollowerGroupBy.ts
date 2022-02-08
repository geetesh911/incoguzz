import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCountAggregate } from "../outputs/FollowerCountAggregate";
import { FollowerMaxAggregate } from "../outputs/FollowerMaxAggregate";
import { FollowerMinAggregate } from "../outputs/FollowerMinAggregate";

@TypeGraphQL.ObjectType("FollowerGroupBy", {
  isAbstract: true,
})
export class FollowerGroupBy {
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

  @TypeGraphQL.Field(_type => FollowerCountAggregate, {
    nullable: true,
  })
  _count!: FollowerCountAggregate | null;

  @TypeGraphQL.Field(_type => FollowerMinAggregate, {
    nullable: true,
  })
  _min!: FollowerMinAggregate | null;

  @TypeGraphQL.Field(_type => FollowerMaxAggregate, {
    nullable: true,
  })
  _max!: FollowerMaxAggregate | null;
}
