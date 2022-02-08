import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCountAggregate } from "../outputs/BlockedCountAggregate";
import { BlockedMaxAggregate } from "../outputs/BlockedMaxAggregate";
import { BlockedMinAggregate } from "../outputs/BlockedMinAggregate";

@TypeGraphQL.ObjectType("BlockedGroupBy", {
  isAbstract: true,
})
export class BlockedGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

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
