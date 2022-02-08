import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePollAnswerArgs } from "./args/AggregatePollAnswerArgs";
import { PollAnswer } from "../../../models/PollAnswer";
import { AggregatePollAnswer } from "../../outputs/AggregatePollAnswer";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => PollAnswer)
export class AggregatePollAnswerResolver {
  @TypeGraphQL.Query(_returns => AggregatePollAnswer, {
    nullable: false,
  })
  async aggregatePollAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregatePollAnswerArgs,
  ): Promise<AggregatePollAnswer> {
    return getPrismaFromContext(ctx).pollAnswer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
