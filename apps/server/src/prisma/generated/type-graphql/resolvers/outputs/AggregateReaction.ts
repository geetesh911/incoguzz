import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCountAggregate } from "../outputs/ReactionCountAggregate";
import { ReactionMaxAggregate } from "../outputs/ReactionMaxAggregate";
import { ReactionMinAggregate } from "../outputs/ReactionMinAggregate";

@TypeGraphQL.ObjectType("AggregateReaction", {
  isAbstract: true,
})
export class AggregateReaction {
  @TypeGraphQL.Field(_type => ReactionCountAggregate, {
    nullable: true,
  })
  _count!: ReactionCountAggregate | null;

  @TypeGraphQL.Field(_type => ReactionMinAggregate, {
    nullable: true,
  })
  _min!: ReactionMinAggregate | null;

  @TypeGraphQL.Field(_type => ReactionMaxAggregate, {
    nullable: true,
  })
  _max!: ReactionMaxAggregate | null;
}
