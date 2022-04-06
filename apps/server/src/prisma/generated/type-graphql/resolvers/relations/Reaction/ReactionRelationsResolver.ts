import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { User } from "../../../models/User";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Reaction)
export class ReactionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() reaction: Reaction,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .reaction.findUnique({
        where: {
          id: reaction.id,
        },
      })
      .post({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() reaction: Reaction,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .reaction.findUnique({
        where: {
          id: reaction.id,
        },
      })
      .user({});
  }
}
