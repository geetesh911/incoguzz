import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCountAggregate } from "../outputs/StoryCountAggregate";
import { StoryMaxAggregate } from "../outputs/StoryMaxAggregate";
import { StoryMinAggregate } from "../outputs/StoryMinAggregate";

@TypeGraphQL.ObjectType("StoryGroupBy", {
  isAbstract: true,
})
export class StoryGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  mediaUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  link!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => StoryCountAggregate, {
    nullable: true,
  })
  _count!: StoryCountAggregate | null;

  @TypeGraphQL.Field(_type => StoryMinAggregate, {
    nullable: true,
  })
  _min!: StoryMinAggregate | null;

  @TypeGraphQL.Field(_type => StoryMaxAggregate, {
    nullable: true,
  })
  _max!: StoryMaxAggregate | null;
}
