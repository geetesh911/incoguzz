import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioCountAggregate } from "../outputs/ClipAudioCountAggregate";
import { ClipAudioMaxAggregate } from "../outputs/ClipAudioMaxAggregate";
import { ClipAudioMinAggregate } from "../outputs/ClipAudioMinAggregate";

@TypeGraphQL.ObjectType("AggregateClipAudio", {
  isAbstract: true,
})
export class AggregateClipAudio {
  @TypeGraphQL.Field(_type => ClipAudioCountAggregate, {
    nullable: true,
  })
  _count!: ClipAudioCountAggregate | null;

  @TypeGraphQL.Field(_type => ClipAudioMinAggregate, {
    nullable: true,
  })
  _min!: ClipAudioMinAggregate | null;

  @TypeGraphQL.Field(_type => ClipAudioMaxAggregate, {
    nullable: true,
  })
  _max!: ClipAudioMaxAggregate | null;
}
