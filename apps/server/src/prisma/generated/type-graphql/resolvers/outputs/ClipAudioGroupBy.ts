import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioCountAggregate } from "../outputs/ClipAudioCountAggregate";
import { ClipAudioMaxAggregate } from "../outputs/ClipAudioMaxAggregate";
import { ClipAudioMinAggregate } from "../outputs/ClipAudioMinAggregate";

@TypeGraphQL.ObjectType("ClipAudioGroupBy", {
  isAbstract: true,
})
export class ClipAudioGroupBy {
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
  audioUrl!: string;

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
