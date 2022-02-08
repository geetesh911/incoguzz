import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeletePollAnswerArgs } from "./args/DeletePollAnswerArgs";
import { PollAnswer } from "../../../models/PollAnswer";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => PollAnswer)
export class DeletePollAnswerResolver {
  @TypeGraphQL.Mutation(_returns => PollAnswer, {
    nullable: true,
  })
  async deletePollAnswer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeletePollAnswerArgs,
  ): Promise<PollAnswer | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).pollAnswer.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
