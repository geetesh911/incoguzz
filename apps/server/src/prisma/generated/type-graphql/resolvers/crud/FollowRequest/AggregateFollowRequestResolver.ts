import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFollowRequestArgs } from "./args/AggregateFollowRequestArgs";
import { FollowRequest } from "../../../models/FollowRequest";
import { AggregateFollowRequest } from "../../outputs/AggregateFollowRequest";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => FollowRequest)
export class AggregateFollowRequestResolver {
  @TypeGraphQL.Query(_returns => AggregateFollowRequest, {
    nullable: false,
  })
  async aggregateFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateFollowRequestArgs,
  ): Promise<AggregateFollowRequest> {
    return getPrismaFromContext(ctx).followRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
