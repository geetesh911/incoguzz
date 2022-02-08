import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateFollowRequestArgs } from "./args/CreateFollowRequestArgs";
import { FollowRequest } from "../../../models/FollowRequest";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => FollowRequest)
export class CreateFollowRequestResolver {
  @TypeGraphQL.Mutation(_returns => FollowRequest, {
    nullable: false,
  })
  async createFollowRequest(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateFollowRequestArgs,
  ): Promise<FollowRequest> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).followRequest.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
