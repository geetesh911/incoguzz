import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCountAggregate } from "../outputs/AudioCountAggregate";
import { AudioMaxAggregate } from "../outputs/AudioMaxAggregate";
import { AudioMinAggregate } from "../outputs/AudioMinAggregate";

@TypeGraphQL.ObjectType("AggregateAudio", {
  isAbstract: true,
})
export class AggregateAudio {
  @TypeGraphQL.Field(_type => AudioCountAggregate, {
    nullable: true,
  })
  _count!: AudioCountAggregate | null;

  @TypeGraphQL.Field(_type => AudioMinAggregate, {
    nullable: true,
  })
  _min!: AudioMinAggregate | null;

  @TypeGraphQL.Field(_type => AudioMaxAggregate, {
    nullable: true,
  })
  _max!: AudioMaxAggregate | null;
}
