import * as TypeGraphQL from "type-graphql";
import { Blocked } from "../../../models/Blocked";
import { User } from "../../../models/User";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blocked)
export class BlockedRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async sourceUser(
    @TypeGraphQL.Root() blocked: Blocked,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .blocked.findUnique({
        where: {
          id: blocked.id,
        },
      })
      .sourceUser({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async targetUser(
    @TypeGraphQL.Root() blocked: Blocked,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .blocked.findUnique({
        where: {
          id: blocked.id,
        },
      })
      .targetUser({});
  }
}
