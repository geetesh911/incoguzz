import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstFollowRequestArgs } from "./args/FindFirstFollowRequestArgs";
import { FollowRequest } from "../../../models/FollowRequest";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => FollowRequest)
export class FindFirstFollowRequestResolver {
  @TypeGraphQL.Query(_returns => FollowRequest, {
    nullable: true,
  })
  async findFirstFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstFollowRequestArgs,
  ): Promise<FollowRequest | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
