import * as TypeGraphQL from "type-graphql";
import { Poll } from "../../../models/Poll";
import { PollAnswer } from "../../../models/PollAnswer";
import { PollOption } from "../../../models/PollOption";
import { Post } from "../../../models/Post";
import { PollPollAnswersArgs } from "./args/PollPollAnswersArgs";
import { PollPollOptionsArgs } from "./args/PollPollOptionsArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Poll)
export class PollRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() poll: Poll,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .poll.findUnique({
        where: {
          id: poll.id,
        },
      })
      .post({});
  }

  @TypeGraphQL.FieldResolver(_type => [PollOption], {
    nullable: false,
  })
  async pollOptions(
    @TypeGraphQL.Root() poll: Poll,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PollPollOptionsArgs,
  ): Promise<PollOption[]> {
    return getPrismaFromContext(ctx)
      .poll.findUnique({
        where: {
          id: poll.id,
        },
      })
      .pollOptions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PollAnswer], {
    nullable: false,
  })
  async pollAnswers(
    @TypeGraphQL.Root() poll: Poll,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: PollPollAnswersArgs,
  ): Promise<PollAnswer[]> {
    return getPrismaFromContext(ctx)
      .poll.findUnique({
        where: {
          id: poll.id,
        },
      })
      .pollAnswers(args);
  }
}
