import * as TypeGraphQL from "type-graphql";
import { Message } from "../../../models/Message";
import { Story } from "../../../models/Story";
import { User } from "../../../models/User";
import { StoryMessageArgs } from "./args/StoryMessageArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Story)
export class StoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() story: Story,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .story.findUnique({
        where: {
          id: story.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false,
  })
  async message(
    @TypeGraphQL.Root() story: Story,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: StoryMessageArgs,
  ): Promise<Message[]> {
    return getPrismaFromContext(ctx)
      .story.findUnique({
        where: {
          id: story.id,
        },
      })
      .message(args);
  }
}
