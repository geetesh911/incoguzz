import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCountAggregate } from "../outputs/PhotoCountAggregate";
import { PhotoMaxAggregate } from "../outputs/PhotoMaxAggregate";
import { PhotoMinAggregate } from "../outputs/PhotoMinAggregate";

@TypeGraphQL.ObjectType("AggregatePhoto", {
  isAbstract: true,
})
export class AggregatePhoto {
  @TypeGraphQL.Field(_type => PhotoCountAggregate, {
    nullable: true,
  })
  _count!: PhotoCountAggregate | null;

  @TypeGraphQL.Field(_type => PhotoMinAggregate, {
    nullable: true,
  })
  _min!: PhotoMinAggregate | null;

  @TypeGraphQL.Field(_type => PhotoMaxAggregate, {
    nullable: true,
  })
  _max!: PhotoMaxAggregate | null;
}
