import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSettingsArgs } from "./args/AggregateSettingsArgs";
import { Settings } from "../../../models/Settings";
import { AggregateSettings } from "../../outputs/AggregateSettings";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Settings)
export class AggregateSettingsResolver {
  @TypeGraphQL.Query(_returns => AggregateSettings, {
    nullable: false,
  })
  async aggregateSettings(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateSettingsArgs,
  ): Promise<AggregateSettings> {
    return getPrismaFromContext(ctx).settings.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
