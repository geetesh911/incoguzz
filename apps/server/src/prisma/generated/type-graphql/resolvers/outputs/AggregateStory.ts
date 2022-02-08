import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCountAggregate } from "../outputs/StoryCountAggregate";
import { StoryMaxAggregate } from "../outputs/StoryMaxAggregate";
import { StoryMinAggregate } from "../outputs/StoryMinAggregate";

@TypeGraphQL.ObjectType("AggregateStory", {
  isAbstract: true,
})
export class AggregateStory {
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
