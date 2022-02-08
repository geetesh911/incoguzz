import * as TypeGraphQL from "type-graphql";
import { Activity } from "../../../models/Activity";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Activity)
export class ActivityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() activity: Activity,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .activity.findUnique({
        where: {
          id: activity.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() activity: Activity,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .activity.findUnique({
        where: {
          id: activity.id,
        },
      })
      .post({});
  }
}
