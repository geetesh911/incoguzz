import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommentRepliesArgs } from "./args/AggregateCommentRepliesArgs";
import { CommentReplies } from "../../../models/CommentReplies";
import { AggregateCommentReplies } from "../../outputs/AggregateCommentReplies";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentReplies)
export class AggregateCommentRepliesResolver {
  @TypeGraphQL.Query(_returns => AggregateCommentReplies, {
    nullable: false,
  })
  async aggregateCommentReplies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCommentRepliesArgs,
  ): Promise<AggregateCommentReplies> {
    return getPrismaFromContext(ctx).commentReplies.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
