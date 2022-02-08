import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCountAggregate } from "../outputs/ClipCountAggregate";
import { ClipMaxAggregate } from "../outputs/ClipMaxAggregate";
import { ClipMinAggregate } from "../outputs/ClipMinAggregate";

@TypeGraphQL.ObjectType("ClipGroupBy", {
  isAbstract: true,
})
export class ClipGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  thumbnailUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  clipAudioId!: string;

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
