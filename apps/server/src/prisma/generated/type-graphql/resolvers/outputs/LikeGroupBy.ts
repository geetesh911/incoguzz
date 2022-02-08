import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCountAggregate } from "../outputs/LikeCountAggregate";
import { LikeMaxAggregate } from "../outputs/LikeMaxAggregate";
import { LikeMinAggregate } from "../outputs/LikeMinAggregate";

@TypeGraphQL.ObjectType("LikeGroupBy", {
  isAbstract: true,
})
export class LikeGroupBy {
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

  @TypeGraphQL.Field(_type => LikeCountAggregate, {
    nullable: true,
  })
  _count!: LikeCountAggregate | null;

  @TypeGraphQL.Field(_type => LikeMinAggregate, {
    nullable: true,
  })
  _min!: LikeMinAggregate | null;

  @TypeGraphQL.Field(_type => LikeMaxAggregate, {
    nullable: true,
  })
  _max!: LikeMaxAggregate | null;
}
