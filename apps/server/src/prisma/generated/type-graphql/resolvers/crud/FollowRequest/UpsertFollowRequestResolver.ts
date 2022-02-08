import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertFollowRequestArgs } from "./args/UpsertFollowRequestArgs";
import { FollowRequest } from "../../../models/FollowRequest";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => FollowRequest)
export class UpsertFollowRequestResolver {
  @TypeGraphQL.Mutation(_returns => FollowRequest, {
    nullable: false,
  })
  async upsertFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertFollowRequestArgs,
  ): Promise<FollowRequest> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
