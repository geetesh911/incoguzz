import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCountAggregate } from "../outputs/ProfileCountAggregate";
import { ProfileMaxAggregate } from "../outputs/ProfileMaxAggregate";
import { ProfileMinAggregate } from "../outputs/ProfileMinAggregate";

@TypeGraphQL.ObjectType("AggregateProfile", {
  isAbstract: true,
})
export class AggregateProfile {
  @TypeGraphQL.Field(_type => ProfileCountAggregate, {
    nullable: true,
  })
  _count!: ProfileCountAggregate | null;

  @TypeGraphQL.Field(_type => ProfileMinAggregate, {
    nullable: true,
  })
  _min!: ProfileMinAggregate | null;

  @TypeGraphQL.Field(_type => ProfileMaxAggregate, {
    nullable: true,
  })
  _max!: ProfileMaxAggregate | null;
}
