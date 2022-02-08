import * as TypeGraphQL from "type-graphql";
import { Poll } from "../../../models/Poll";
import { PollAnswer } from "../../../models/PollAnswer";
import { PollOption } from "../../../models/PollOption";
import { User } from "../../../models/User";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => PollAnswer)
export class PollAnswerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() pollAnswer: PollAnswer,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .pollAnswer.findUnique({
        where: {
          id: pollAnswer.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver(_type => Poll, {
    nullable: false,
  })
  async poll(
    @TypeGraphQL.Root() pollAnswer: PollAnswer,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Poll> {
    return getPrismaFromContext(ctx)
      .pollAnswer.findUnique({
        where: {
          id: pollAnswer.id,
        },
      })
      .poll({});
  }

  @TypeGraphQL.FieldResolver(_type => PollOption, {
    nullable: false,
  })
  async pollOption(
    @TypeGraphQL.Root() pollAnswer: PollAnswer,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<PollOption> {
    return getPrismaFromContext(ctx)
      .pollAnswer.findUnique({
        where: {
          id: pollAnswer.id,
        },
      })
      .pollOption({});
  }
}
