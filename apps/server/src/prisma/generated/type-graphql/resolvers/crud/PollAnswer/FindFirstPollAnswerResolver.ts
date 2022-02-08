import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstPollAnswerArgs } from "./args/FindFirstPollAnswerArgs";
import { PollAnswer } from "../../../models/PollAnswer";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => PollAnswer)
export class FindFirstPollAnswerResolver {
  @TypeGraphQL.Query(_returns => PollAnswer, {
    nullable: true,
  })
  async findFirstPollAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstPollAnswerArgs,
  ): Promise<PollAnswer | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).pollAnswer.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
