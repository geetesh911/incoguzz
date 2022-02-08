import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRepliesCountAggregate } from "../outputs/CommentRepliesCountAggregate";
import { CommentRepliesMaxAggregate } from "../outputs/CommentRepliesMaxAggregate";
import { CommentRepliesMinAggregate } from "../outputs/CommentRepliesMinAggregate";

@TypeGraphQL.ObjectType("CommentRepliesGroupBy", {
  isAbstract: true,
})
export class CommentRepliesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  comment!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  repliedToId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

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
