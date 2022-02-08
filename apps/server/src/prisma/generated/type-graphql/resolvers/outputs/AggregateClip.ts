import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCountAggregate } from "../outputs/ClipCountAggregate";
import { ClipMaxAggregate } from "../outputs/ClipMaxAggregate";
import { ClipMinAggregate } from "../outputs/ClipMinAggregate";

@TypeGraphQL.ObjectType("AggregateClip", {
  isAbstract: true,
})
export class AggregateClip {
  @TypeGraphQL.Field(_type => ClipCountAggregate, {
    nullable: true,
  })
  _count!: ClipCountAggregate | null;

  @TypeGraphQL.Field(_type => ClipMinAggregate, {
    nullable: true,
  })
  _min!: ClipMinAggregate | null;

  @TypeGraphQL.Field(_type => ClipMaxAggregate, {
    nullable: true,
  })
  _max!: ClipMaxAggregate | null;
}
