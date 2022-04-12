import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.ObjectType("PostMaxAggregate", {
  isAbstract: true,
})
export class PostMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  caption!: string | null;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: true,
  })
  type!: "POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  placeId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  archive!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  published!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  slug!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  views!: number | null;
}
