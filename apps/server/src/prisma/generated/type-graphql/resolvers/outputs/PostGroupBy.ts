import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.ObjectType("PostGroupBy", {
  isAbstract: true,
})
export class PostGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  caption!: string | null;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: false,
  })
  type!: "POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  placeId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
  })
  archive!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field(_type => PostCountAggregate, {
    nullable: true,
  })
  _count!: PostCountAggregate | null;

  @TypeGraphQL.Field(_type => PostMinAggregate, {
    nullable: true,
  })
  _min!: PostMinAggregate | null;

  @TypeGraphQL.Field(_type => PostMaxAggregate, {
    nullable: true,
  })
  _max!: PostMaxAggregate | null;
}
