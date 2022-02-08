import * as TypeGraphQL from "type-graphql";
import { Clip } from "../../../models/Clip";
import { ClipAudio } from "../../../models/ClipAudio";
import { Post } from "../../../models/Post";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver(_of => Clip)
export class ClipRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false,
  })
  async post(
    @TypeGraphQL.Root() clip: Clip,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Post> {
    return getPrismaFromContext(ctx)
      .clip.findUnique({
        where: {
          id: clip.id,
        },
      })
      .post({});
  }

  @TypeGraphQL.FieldResolver(_type => ClipAudio, {
    nullable: false,
  })
  async clipAudio(
    @TypeGraphQL.Root() clip: Clip,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<ClipAudio> {
    return getPrismaFromContext(ctx)
      .clip.findUnique({
        where: {
          id: clip.id,
        },
      })
      .clipAudio({});
  }
}
