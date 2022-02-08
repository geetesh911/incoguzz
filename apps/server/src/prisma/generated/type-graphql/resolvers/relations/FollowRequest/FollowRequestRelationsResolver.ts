import * as TypeGraphQL from "type-graphql";
import { FollowRequest } from "../../../models/FollowRequest";
import { User } from "../../../models/User";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => FollowRequest)
export class FollowRequestRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async sourceUser(
    @TypeGraphQL.Root() followRequest: FollowRequest,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .followRequest.findUnique({
        where: {
          id: followRequest.id,
        },
      })
      .sourceUser({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async targetUser(
    @TypeGraphQL.Root() followRequest: FollowRequest,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .followRequest.findUnique({
        where: {
          id: followRequest.id,
        },
      })
      .targetUser({});
  }
}
