import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPollAnswerArgs } from "./args/GroupByPollAnswerArgs";
import { PollAnswer } from "../../../models/PollAnswer";
import { PollAnswerGroupBy } from "../../outputs/PollAnswerGroupBy";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => PollAnswer)
export class GroupByPollAnswerResolver {
  @TypeGraphQL.Query(_returns => [PollAnswerGroupBy], {
    nullable: false,
  })
  async groupByPollAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByPollAnswerArgs,
  ): Promise<PollAnswerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any),
    );
    return getPrismaFromContext(ctx).pollAnswer.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
