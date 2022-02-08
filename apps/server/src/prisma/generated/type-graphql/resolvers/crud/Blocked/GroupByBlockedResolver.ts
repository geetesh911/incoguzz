import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByBlockedArgs } from "./args/GroupByBlockedArgs";
import { Blocked } from "../../../models/Blocked";
import { BlockedGroupBy } from "../../outputs/BlockedGroupBy";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Blocked)
export class GroupByBlockedResolver {
  @TypeGraphQL.Query(_returns => [BlockedGroupBy], {
    nullable: false,
  })
  async groupByBlocked(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBlockedArgs,
  ): Promise<BlockedGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).blocked.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
