import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPollOptionArgs } from "./args/GroupByPollOptionArgs";
import { PollOption } from "../../../models/PollOption";
import { PollOptionGroupBy } from "../../outputs/PollOptionGroupBy";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => PollOption)
export class GroupByPollOptionResolver {
  @TypeGraphQL.Query(_returns => [PollOptionGroupBy], {
    nullable: false,
  })
  async groupByPollOption(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByPollOptionArgs,
  ): Promise<PollOptionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).pollOption.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
