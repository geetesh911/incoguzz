import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCountAggregate } from "../outputs/PlaceCountAggregate";
import { PlaceMaxAggregate } from "../outputs/PlaceMaxAggregate";
import { PlaceMinAggregate } from "../outputs/PlaceMinAggregate";

@TypeGraphQL.ObjectType("PlaceGroupBy", {
  isAbstract: true,
})
export class PlaceGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  address!: string;

  @TypeGraphQL.Field(_type => PlaceCountAggregate, {
    nullable: true,
  })
  _count!: PlaceCountAggregate | null;

  @TypeGraphQL.Field(_type => PlaceMinAggregate, {
    nullable: true,
  })
  _min!: PlaceMinAggregate | null;

  @TypeGraphQL.Field(_type => PlaceMaxAggregate, {
    nullable: true,
  })
  _max!: PlaceMaxAggregate | null;
}
