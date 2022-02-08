import * as TypeGraphQL from "type-graphql";
import { Post } from "../../../models/Post";
import { Video } from "../../../models/Video";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Video)
export class VideoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() video: Video,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .video.findUnique({
        where: {
          id: video.id,
        },
      })
      .post({});
  }
}
