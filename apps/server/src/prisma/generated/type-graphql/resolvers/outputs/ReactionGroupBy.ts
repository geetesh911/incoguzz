import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionCountAggregate } from "../outputs/ReactionCountAggregate";
import { ReactionMaxAggregate } from "../outputs/ReactionMaxAggregate";
import { ReactionMinAggregate } from "../outputs/ReactionMinAggregate";
import { ReactionType } from "../../enums/ReactionType";

@TypeGraphQL.ObjectType("ReactionGroupBy", {
  isAbstract: true,
})
export class ReactionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => ReactionType, {
    nullable: false,
  })
  reaction!: "LIKE" | "LAUGH" | "COOL" | "FIRE" | "CELEBRATE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

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
