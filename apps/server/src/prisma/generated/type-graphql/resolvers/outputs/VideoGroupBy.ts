import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCountAggregate } from "../outputs/VideoCountAggregate";
import { VideoMaxAggregate } from "../outputs/VideoMaxAggregate";
import { VideoMinAggregate } from "../outputs/VideoMinAggregate";

@TypeGraphQL.ObjectType("VideoGroupBy", {
  isAbstract: true,
})
export class VideoGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  thumbnailUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => VideoCountAggregate, {
    nullable: true,
  })
  _count!: VideoCountAggregate | null;

  @TypeGraphQL.Field(_type => VideoMinAggregate, {
    nullable: true,
  })
  _min!: VideoMinAggregate | null;

  @TypeGraphQL.Field(_type => VideoMaxAggregate, {
    nullable: true,
  })
  _max!: VideoMaxAggregate | null;
}
