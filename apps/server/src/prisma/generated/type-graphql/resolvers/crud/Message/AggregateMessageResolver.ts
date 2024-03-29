import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMessageArgs } from "./args/AggregateMessageArgs";
import { Message } from "../../../models/Message";
import { AggregateMessage } from "../../outputs/AggregateMessage";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Message)
export class AggregateMessageResolver {
  @TypeGraphQL.Query(_returns => AggregateMessage, {
    nullable: false,
  })
  async aggregateMessage(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMessageArgs,
  ): Promise<AggregateMessage> {
    return getPrismaFromContext(ctx).message.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
