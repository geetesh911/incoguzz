import * as TypeGraphQL from "type-graphql";
import { Audio } from "../../../models/Audio";
import { Post } from "../../../models/Post";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Audio)
export class AudioRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() audio: Audio,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .audio.findUnique({
        where: {
          id: audio.id,
        },
      })
      .post({});
  }
}
