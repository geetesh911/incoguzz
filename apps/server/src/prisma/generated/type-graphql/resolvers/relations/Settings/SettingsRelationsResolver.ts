import * as TypeGraphQL from "type-graphql";
import { Settings } from "../../../models/Settings";
import { User } from "../../../models/User";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settings)
export class SettingsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true,
  })
  async user(
    @TypeGraphQL.Root() settings: Settings,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User | null> {
    return getPrismaFromContext(ctx)
      .settings.findUnique({
        where: {
          id: settings.id,
        },
      })
      .user({});
  }
}
