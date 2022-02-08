import * as TypeGraphQL from "type-graphql";
import { Poll } from "../../../models/Poll";
import { PollAnswer } from "../../../models/PollAnswer";
import { PollOption } from "../../../models/PollOption";
import { PollOptionPollAnswersArgs } from "./args/PollOptionPollAnswersArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => PollOption)
export class PollOptionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Poll, {
    nullable: false,
  })
  async poll(
    @TypeGraphQL.Root() pollOption: PollOption,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Poll> {
    return getPrismaFromContext(ctx)
      .pollOption.findUnique({
        where: {
          id: pollOption.id,
        },
      })
      .poll({});
  }

  @TypeGraphQL.FieldResolver(_type => [PollAnswer], {
    nullable: false,
  })
  async pollAnswers(
    @TypeGraphQL.Root() pollOption: PollOption,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PollOptionPollAnswersArgs,
  ): Promise<PollAnswer[]> {
    return getPrismaFromContext(ctx)
      .pollOption.findUnique({
        where: {
          id: pollOption.id,
        },
      })
      .pollAnswers(args);
  }
}
