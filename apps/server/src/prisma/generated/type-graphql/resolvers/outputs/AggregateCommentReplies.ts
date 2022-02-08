import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCountAggregate } from "../outputs/CommentRepliesCountAggregate";
import { CommentRepliesMaxAggregate } from "../outputs/CommentRepliesMaxAggregate";
import { CommentRepliesMinAggregate } from "../outputs/CommentRepliesMinAggregate";

@TypeGraphQL.ObjectType("AggregateCommentReplies", {
  isAbstract: true,
})
export class AggregateCommentReplies {
  @TypeGraphQL.Field(_type => CommentRepliesCountAggregate, {
    nullable: true,
  })
  _count!: CommentRepliesCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentRepliesMinAggregate, {
    nullable: true,
  })
  _min!: CommentRepliesMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentRepliesMaxAggregate, {
    nullable: true,
  })
  _max!: CommentRepliesMaxAggregate | null;
}
