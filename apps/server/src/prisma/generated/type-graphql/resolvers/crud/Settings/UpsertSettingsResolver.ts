import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertSettingsArgs } from "./args/UpsertSettingsArgs";
import { Settings } from "../../../models/Settings";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settings)
export class UpsertSettingsResolver {
  @TypeGraphQL.Mutation(_returns => Settings, {
    nullable: false,
  })
  async upsertSettings(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertSettingsArgs,
  ): Promise<Settings> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).settings.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
